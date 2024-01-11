import * as rep from "../repositories/repositories.js"
import userModel from "../models/user.model.js"

export const findUsers = async () => {
    try {
        return await rep.findAll(userModel);
    } catch (error) {
        throw (error)
    }
}

export const findUserById  = async (id) => {
    try {
        return await rep.findOneById(userModel, id);
    } catch (error) {
        throw error
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await rep.findOneByFilter(userModel, { email: email });
        return user
    } catch (error) {
        throw error
    }
}

export const deleteUserById  = async (id) => {
    try {
        return await rep.deleteOneById(userModel, id);
    } catch (error) {
        throw error
    }
}

export const updateUserById  = async (id, info) => {
    try {
        return await rep.updateOneById(userModel, id, info);
    } catch (error) {
        throw error
    }
}