import * as rep from "../repositories/repositories.js";
import productModel from "../models/products.model.js";
import ingredientModel from "../models/ingredients.model.js";
import extraModel from "../models/extras.model.js";
import ticketModel from "../models/tickets.model.js";


export const findProducts = async () => {
    try {
        return await rep.findAll(productModel);
    } catch (error) {
        throw error
    }
}

export const createProduct = async (info) => {
    try {
        return await rep.createOne(productModel, info);
    } catch (error) {
        throw error
    }
}

export const findProductById = async (id) => {
    try {
        return await rep.findOneById(productModel, id);
    } catch (error) {
        throw error;
    }
}

export const updateProductById = async (id, info) => {
    try {
        await rep.updateOneById(productModel, id, info);

        const product = await rep.findOneById(productModel, id)

        const populateExtras = await product.populate({ path: "extras.extra", model: extraModel });
        const populateIngredients = await populateExtras.populate({ path: "ingredients.ingredient", model: ingredientModel });

        const newPrice = calculateProductPrice(populateIngredients);

        return await rep.updateOneById(productModel, id, { price: newPrice });

    } catch (error) {
        throw error;
    }
};

const calculateProductPrice = (product) => {
    let totalPrice = 0;

    for (const item of product.ingredients) {
        totalPrice += (item.ingredient.pricexg || 0) * item.quantity;
    }

    for (const item of product.extras) {
        totalPrice += (item.extra.pricexu || 0) * item.quantity;
    }

    return totalPrice;
};

export const updateThumbnailByPosition = async (id, url, position) => {
    try {
        const updateField = `thumbnails.${position}.url`;

        const updateObject = {
            [updateField]: url
        };

        return await rep.updateOneById(productModel, id, { $set: updateObject });
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

export const createTicket = async (user, cart, deliveryDate) => {
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

        const info = {
            user: {
                userId: user._id,
                email: user.email
            },
            deliveryDate: deliveryDate,
            products: validatedCart,
            total: totalPrice
        }

        return await rep.createOne(ticketModel, info);
        

    } catch (error) {
        throw error;
    }
}

