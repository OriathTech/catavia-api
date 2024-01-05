import * as rep from "../repositories/repositories.js";
import productModel from "../models/products.model.js";


export const findProducts = async () => {
    try {
        return await rep.findAll(productModel);
    } catch (error) {
        throw (error)
    }
}

export const createProduct  = async (info) => {
    try {
        return await rep.createOne(productModel, info);
    } catch (error) {
        throw (error)
    }
}

export const findProductById  = async (id) => {
    try {
        return await rep.findOneById(productModel, id);
    } catch (error) {
        throw (error)
    }
}

export const updateProductById  = async (id, info) => {
    try {
        return await rep.updateOneById(productModel, id, info);
    } catch (error) {
        throw (error)
    }
}

export const deleteProductById  = async (id) => {
    try {
        return await rep.deleteOneById(productModel, id);
    } catch (error) {
        throw (error)
    }
}

