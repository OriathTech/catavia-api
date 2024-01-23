import * as serv from "../services/ingredients.services.js"
import * as zod from "../utils/zod/validations.js"
import ingredientSchemaZ from "../utils/zod/schemas/ingredients.js"

export const getIngredients = async (req, res, next) => {
    try {
        const ingredients = await serv.findIngredients()

        return res.status(200).json({
            status: "success",
            message: "Se han encontrado los elementos.",
            payload: ingredients
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo encontrar los elementos.",
            error: error
        });
    }
}

export const postIngredient = async (req, res, next) => {
    const info = req.body;

    try {
        const data = zod.validateNewElement(ingredientSchemaZ, info, ["name"]);

        if (!data.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(data.error.message)
                }
            });
        }

        const ingredient = await serv.createIngredient(data.data)

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido creado.",
            payload: ingredient
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha podido crear el elemento.",
            error: error
        });
    }
}

export const putIngredient = async (req, res, next) => {
    const info = req.body;
    const iid = req.params.iid;
    try {
        const ingredientId = zod.validateId(iid);

        if (!ingredientId.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(ingredientId.error.message)
                }
            });
        }

        const data = zod.validateElement(ingredientSchemaZ, info);

        if (!data.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(data.error.message)
                }
            });
        }

        const ingredient = await serv.updateIngredientById(ingredientId.data, data.data);
        
        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido actualizado.",
            payload: ingredient
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha podido actualizar el elemento.",
            error: error
        });
    }
}

export const deleteIngredient = async (req, res, next) => {
    const iid = req.params.iid;

    try {
        const ingredientId = zod.validateId(iid);

        if (!ingredientId.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(ingredientId.error.message)
                }
            });
        }

        const ingredient = await serv.deleteIngredientById(ingredientId.data)

        if (ingredient) {
            return res.status(200).json({
                status: "success",
                message: "El elemento ha sido eliminado.",
                payload: ingredient
            });
        }

        return res.status(200).json({
            status: "warning",
            message: "No se pudo eliminar el elemento, se encuentra en uno o más productos."
        })


    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo eliminar el elemento.",
            error: error
        });
    }
}