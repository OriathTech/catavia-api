import * as serv from "../services/products.services.js";

export const getProducts = async (req, res, next) => {
    try {
        const products = await serv.findProducts()

        return res.status(200).json({
            status: "success",
            message: "Se han encontrado los elementos.",
            payload: products
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo encontrar los elementos.",
            error: error
        });
    }
}

export const getProduct = async (req, res, next) => {
    const pid = req.params.pid;

    try {
        const product = await serv.findProductById(pid)

        return res.status(200).json({
            status: "success",
            message: "Se ha encontrado el elemento.",
            payload: product
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha encontrado el elemento.",
            error: error
        });
    }
}

export const postProduct = async (req, res, next) => {
    const { name, description, category, time } = req.body;

    try {
        const product = await serv.createProduct({ name, description, category, time })

        return res.status(200).json({
            status: "success",
            message: "Se ha creado el elemento.",
            payload: product
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo crear el elemento.",
            error: error
        });
    }
}

export const putProduct = async (req, res, next) => {
    const info = req.body;
    const pid = req.params.pid;

    try {
        const product = await serv.updateProductById(pid, info)

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido actualizado.",
            payload: product
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se a podido actualizar el elemento.",
            error: error
        });
    }
}

export const deleteProduct = async (req, res, next) => {
    const pid = req.params.pid;

    try {
        const product = await serv.deleteProductById(pid)

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido eliminado.",
            payload: product
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo eliminar el elemento.",
            error: error
        });
    }
}