import * as rep from "../repositories/repositories.js";
import productModel from "../models/products.model.js";
import ingredientModel from "../models/ingredients.model.js";
import extraModel from "../models/extras.model.js";
import ticketModel from "../models/tickets.model.js";


export const findProducts = async () => {
    try {
        const products = await rep.findAll(productModel)

        console.log(products)

        // if (products) {
        //     const populateProducts = await products.populate([
        //         { path: "extras.extra", model: extraModel },
        //         { path: "ingredients.ingredient", model: ingredientModel }
        //     ]);

        //     return populateProducts;
        // }

        return products;


    } catch (error) {
        throw error;
    }
}

export const createProduct = async (info) => {
    try {
        const updatedproduct = await rep.createOne(productModel, info);

        console.log(`updatedProduct: ${updatedproduct}`)

        const populateProduct = await calculateProductPrice(updatedproduct);

        console.log(`populateProduct: ${populateProduct}`)

        return populateProduct;
    } catch (error) {
        throw error;
    }
}

export const findProductById = async (id) => {
    try {

        const product = await rep.findOneById(productModel, id);

        const populateProduct = await product.populate([
            { path: "extras.extra", model: extraModel },
            { path: "ingredients.ingredient", model: ingredientModel }
        ]);

        return populateProduct;
    } catch (error) {
        throw error;
    }
}

export const updateProductById = async (id, info) => {
    try {
        const product = await rep.findOneById(productModel, id);
        const updatedProduct = await rep.updateOneById(productModel, id, info);

        const populateProduct = await calculateProductPrice(updatedProduct);

        const updatedStatus = getUpdatedStatus(product, populateProduct);

        return await rep.updateOneById(productModel, id, { status: updatedStatus });
    } catch (error) {
        throw error;
    }
};

export const updateThumbnailByPosition = async (id, url, position) => {
    try {
        const updateField = `thumbnails.${position}.url`;

        const updateObject = {
            [updateField]: url
        };

        const product = await rep.updateOneById(productModel, id, { $set: updateObject });

        const populateProduct = await product.populate([
            { path: "extras.extra", model: extraModel },
            { path: "ingredients.ingredient", model: ingredientModel }
        ]);

        return populateProduct;
    } catch (error) {
        throw error;
    }
}

export const deleteThumbnailByPosition = async (id, position) => {
    try {
        const updateField = `thumbnails.${position}.url`;

        const updateObject = {
            [updateField]: null
        };

        return await rep.updateOneById(productModel, id, { $set: updateObject });
    } catch (error) {
        throw error;
    }
}

export const deleteProductById = async (id) => {
    try {
        return await rep.deleteOneById(productModel, id);
    } catch (error) {
        throw error
    }
}

export const createTicket = async (user, cart) => {
    try {
        let totalPrice = 0;
        const productPromises = cart.products.map(async (cartItem) => {
            const product = await rep.findOneById(productModel, cartItem._id);

            if (!product) {
                throw new Error(`Producto con _id ${cartItem._id} no existe`);
            }

            const productPrice = product.price * cartItem.quantity;
            totalPrice += productPrice;

            return {
                name: product.name,
                quantity: cartItem.quantity,
                price: productPrice
            };
        });

        const validatedCart = await Promise.all(productPromises);

        const dateNow = dateNowWithFormat();

        let info = {
            purchaseDate: dateNow,
            deliveryDate: cart.deliveryDate,
            products: validatedCart,
            total: totalPrice
        }

        if (user) {
            info.user = {
                userId: user._id,
                email: user.email
            };
        }

        return await rep.createOne(ticketModel, info);
    } catch (error) {
        throw error;
    }
}

//Utils:
const calculateProductPrice = async (product) => {
    let totalPrice = 0;

    try {
        console.log(product)
        const populateProduct = await product.populate([
            { path: "extras.extra", model: extraModel },
            { path: "ingredients.ingredient", model: ingredientModel },
        ]);

        for (const item of populateProduct.ingredients) {
            totalPrice += (item.ingredient.pricexg || 0) * item.quantity;
        }

        for (const item of populateProduct.extras) {
            totalPrice += (item.extra.pricexu || 0) * item.quantity;
        }

        const response = await rep.updateOneById(productModel, product._id, { price: totalPrice })

        return response 
    } catch (error) {
        throw error
    }
};

const getUpdatedStatus = (product, populateProduct) => {
    if (product.status !== populateProduct.status && populateProduct.status === "online" || populateProduct.status === "featured") {

        const hasFalseIngredients = populateProduct.ingredients.some(
            (ingredient) => ingredient.ingredient.status === false
        );

        const hasFalseExtras = populateProduct.extras.some(
            (extra) => extra.extra.status === false
        );

        return hasFalseIngredients || hasFalseExtras ? false : true;
    }

    return populateProduct.status;
};


const dateNowWithFormat = () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const formatedDate = `${day}/${month}/${year} ${hour}:${minute < 10 ? '0' : ''}${minute}`;

    return formatedDate;
};

