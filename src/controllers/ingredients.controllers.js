import * as serv from "../services/ingredients.services.js"

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
    const { name, category, pricexg } = req.body
    try {
        const ingredient = await serv.createIngredient({ name, category, pricexg })

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
        const ingredient = await serv.updateIngredientById(iid, info)
        
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
        console.log(iid)
        const ingredient = await serv.deleteIngredientById(iid)

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