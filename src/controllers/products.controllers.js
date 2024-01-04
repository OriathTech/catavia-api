import { findProducts, createProduct } from "../services/products.services.js";



export const getProducts = async (req, res, next) => {
    try {

        const products = await findProducts()

        res.status(200).json({
            status: "success",
            message: "placeholder",
            payload: products
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const getProduct = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const postProduct = async (req, res, next) => {

    const { name, description, category, time } = req.body;

    try {
        const product = await createProduct({ name, description, category, time })

        res.status(200).json({
            status: "success",
            message: "placeholder",
            payload: product
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const putProduct = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}