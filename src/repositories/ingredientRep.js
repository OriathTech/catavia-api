import ingredientModel from "../models/ingredientModel.js";

export const findIngredients = async () => {
    try {
        return await ingredientModel.find();
    } catch (error) {
        throw (error)
    }
}

export const findIngredientById = async (id) => {
    try {
        return await ingredientModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createIngredient = async (newIngredient) => {
    try {
        return await ingredientModel.create(newIngredient)
    } catch (error) {
        throw (error)
    }
}

export const deleteIngredient = async (id) => {
    try {
        return await ingredientModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateIngredient = async (id, info) => {
    try {
        return await ingredientModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}