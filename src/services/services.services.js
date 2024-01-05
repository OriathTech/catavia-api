import * as rep from "../repositories/repositories.js"
import serviceModel from "../models/services.model.js"
import productModel from "../models/products.model.js"

export const findServices = async () => {
    try {
        return await rep.findAll(serviceModel);
    } catch (error) {
        throw (error)
    }
}

export const createService  = async (info) => {
    try {
        return await rep.createOne(serviceModel, info);
    } catch (error) {
        throw (error)
    }
}

export const updateServiceById  = async (id, info) => {
    try {
        return await rep.updateOneById(serviceModel, id, info);
    } catch (error) {
        throw (error)
    }
}

export const deleteServiceById = async (id) => {
    try {
        const productsWithExtra = await rep.findAll(productModel, {'services.service': id});
        
        if (productsWithExtra.length > 0) {
           return null
        }

        return await rep.deleteOneById(serviceModel, id);
    } catch (error) {
        throw error;
    }
};