import extraModel from "../models/extrasModel.js";

export const findExtras = async () => {
    try {
        return await extraModel.find();
    } catch (error) {
        throw (error)
    }
}

export const findExtraById = async (id) => {
    try {
        return await extraModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createExtra = async (newExtra) => {
    try {
        return await extraModel.create(newExtra)
    } catch (error) {
        throw (error)
    }
}

export const deleteExtra = async (id) => {
    try {
        return await extraModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateExtra = async (id, info) => {
    try {
        return await extraModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}