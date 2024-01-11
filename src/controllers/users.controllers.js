import * as serv from '../services/users.services.js'

export const getUsers = async (req, res, next) => {
    try {
        const users = await serv.findUsers()

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido encontrado",
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha encontrado el elemento.",
            error: error
        });
    }
}

export const putUser = async (req, res, next) => {
    const {points} = req.body;
    const uid = req.params.uid;

    try {
        const user = await serv.updateUserById(uid, points);

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido actualizado.",
            payload: user
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha podido actualizar el elemento.",
            error: error
        });
    }
}

export const deleteUser = async (req, res, next) => {
    const uid = req.params.uid;

    try {
        const user = await serv.deleteUserById(uid);
        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido eliminado.",
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo eliminar el elemento.",
            error: error
        });
    }
}