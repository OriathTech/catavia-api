import * as rep from "../repositories/repositories.js"
import ingredientModel from "../models/ingredients.model.js"
import productModel from "../models/products.model.js"

export const findIngredients = async () => {
    try {
        return await rep.findAll(ingredientModel);
    } catch (error) {
        throw error;
    }
}

export const createIngredient  = async (info) => {
    try {
        return await rep.createOne(ingredientModel, info);
    } catch (error) {
        throw error;
    }
}

export const updateIngredientById  = async (id, info) => {
    try {
        const ingredient = await rep.findOneById(id)
        const updatedIngredient = await rep.updateOneById(extraModel, id, info);

        if (ingredient.status != updatedIngredient.status && updatedIngredient.status === false) {
            await rep.updateManyByFilter(productModel, { 'ingredients.ingredient': ingredient._id }, { $set: { status: false } });
        }

        return updatedIngredient;
    } catch (error) {
        throw error
    }
}

export const deleteIngredientById = async (id) => {
    try {
        const productsWithIngredient = await rep.findAll(productModel, {'ingredients.ingredient': id});
        
        console.log(productsWithIngredient)
        
        if (productsWithIngredient.length > 0) {
           return null
        }

        return await rep.deleteOneById(ingredientModel, id);
    } catch (error) {
        throw error;
    }
};