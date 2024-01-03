import userModel from "../models/userModel.js";

export const findUsers = async () => {
    try {
        return await userModel.find();
    } catch (error) {
        throw (error)
    }
}

export const findUserById = async (id) => {
    try {
        return await userModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createUser = async (newUser) => {
    try {
        return await userModel.create(newUser)
    } catch (error) {
        throw (error)
    }
}

export const deleteUser = async (id) => {
    try {
        return await userModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateUser = async (id, info) => {
    try {
        return await userModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}