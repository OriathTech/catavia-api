import productModel from "../models/productModel.js";

export const findProducts = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        throw (error)
    }
}

export const findProductById = async (id) => {
    try {
        return await productModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createProduct = async (newProduct) => {
    try {
        return await productModel.create(newProduct)
    } catch (error) {
        throw (error)
    }
}

export const deleteProduct = async (id) => {
    try {
        return await productModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateProduct = async (id, info) => {
    try {
        return await productModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}