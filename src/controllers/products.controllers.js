import * as serv from "../services/products.services.js";
import * as zod from "../utils/zod/validations.js"
import productSchemaZ from "../utils/zod/schemas/products.js";

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
    const data = req.body;

    try {
        const result = zod.validateNewElement(productSchemaZ, data, ["name", "category"])

        if (!result.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: result.error.message
            });
        }

        console.log(result.data)

        const product = await serv.createProduct(result.data)

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

export const postThumbnail = async (req, res, next) => {
    const pid = req.params.pid;
    const position = req.params.position;
    const { url } = req.body;

    try {
        const product = await serv.updateThumbnailByPosition(pid, url, position);

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

export const deleteThumbnail = async (req, res, next) => {
    const pid = req.params.pid;
    const position = req.params.position;

    try {
        const product = await serv.deleteThumbnailByPosition(pid, position);

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

export const checkout = async (req, res, next) => {
    const {cart, deliveryDate} = req.body;
    const user = req.user;

    try {
        const ticket = await serv.createTicket(user, cart, deliveryDate);

        if (!ticket) {
            throw new Error(`Hubo un problema en la Base de datos.`)
        }

        return res.status(200).json({
            status: "success",
            message: "El ticket ha sido creado.",
            payload: ticket
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo eliminar el elemento.",
            error: error
        });
    }
}