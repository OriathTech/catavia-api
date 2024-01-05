export const findAll = async (model, filter) => {
    try {
        return await model.find(filter);
    } catch (error) {
        throw (error)
    }
}

export const findOneById = async (model, id) => {
    try {
        return await model.findById(id);
    } catch (error) {
        throw (error)
    }
}

export const createOne = async (model, info) => {
    try {
        return await model.create(info)
    } catch (error) {
        throw (error)
    }
}

export const deleteOneById = async (model, id) => {
    try {
        return await model.findByIdAndDelete(id);
    } catch (error) {
        throw (error)
    }
}

export const updateOneById = async (model, id, info) => {
    try {
        return await model.findByIdAndUpdate(id, info, { new: true });
    } catch (error) {
        throw (error)
    }
}