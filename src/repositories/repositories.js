export const findAll = async (model) => {
    try {
        return await model.find();
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
        console.log(info)
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