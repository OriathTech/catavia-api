import serviceModel from "../models/serviceModel.js";

export const findServices = async () => {
    try {
        return await serviceModel.find();
    } catch (error) {
        throw (error)
    }
}

export const findServiceById = async (id) => {
    try {
        return await serviceModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createService = async (newService) => {
    try {
        return await serviceModel.create(newService)
    } catch (error) {
        throw (error)
    }
}

export const deleteService = async (id) => {
    try {
        return await serviceModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateService = async (id, info) => {
    try {
        return await serviceModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}