import * as rep from "../repositories/repositories.js"
import extraModel from "../models/extras.model.js"
import productModel from "../models/products.model.js"

export const findExtras = async () => {
    try {
        return await rep.findAll(extraModel);
    } catch (error) {
        throw error
    }
}

export const createExtra = async (info) => {
    try {
        return await rep.createOne(extraModel, info);
    } catch (error) {
        throw error
    }
}

export const updateExtraById = async (id, info) => {
    try {
        const extra = await rep.findOneById(id)
        const updatedExtra = await rep.updateOneById(extraModel, id, info);

        if (extra.status != updatedExtra.status && updatedExtra.status === false) {
            await rep.updateManyByFilter(productModel, { 'extras.extra': extra._id }, { $set: { status: false } });
        }

        return updatedExtra;
    } catch (error) {
        throw error
    }
}

export const deleteExtraById = async (id) => {
    try {
        const productsWithExtra = await rep.findAll(productModel, { 'extras.extra': id });

        console.log(productsWithExtra)

        if (productsWithExtra.length > 0) {
            return null
        }

        return await rep.deleteOneById(extraModel, id);
    } catch (error) {
        throw error;
    }
};