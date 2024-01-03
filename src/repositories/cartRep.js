import cartModel from "../models/cartModel.js";

export const findCartById = async (id) => {
    try {
        return await cartModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createCart = async () => {
    try {
        const newCart = await cartModel()
        await newCart.save()
        return newCart
    } catch (error) {
        throw (error)
    }
}

export const deleteCart = async (id) => {
    try {
        return await cartModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateCart = async (id, info) => {
    try {
        return await cartModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}