import thumbnailModel from "../models/thumbnailModel";

export const findThumbnails = async () => {
    try {
        return await thumbnailModel.find();
    } catch (error) {
        throw (error)
    }
}

export const findThumbnailById = async (id) => {
    try {
        return await thumbnailModel.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createThumbnail = async (newThumbnail) => {
    try {
        return await thumbnailModel.create(newThumbnail)
    } catch (error) {
        throw (error)
    }
}

export const deleteThumbnail = async (id) => {
    try {
        return await thumbnailModel.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateThumbnail = async (id, info) => {
    try {
        return await thumbnailModel.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}