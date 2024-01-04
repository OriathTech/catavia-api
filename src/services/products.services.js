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
    console.log(info)
    try {
        return await rep.createOne(productModel, info);
    } catch (error) {
        throw (error)
    }
}