import * as serv from '../services/users.services.js'
import * as zod from '../utils/zod/validations.js'
import userSchemaZ from '../utils/zod/schemas/users.js'

export const getUsers = async (req, res, next) => {
    try {
        const users = await serv.findUsers()

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido encontrado",
            payload: users
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha encontrado el elemento.",
            error: error.message
        });
    }
}

export const putUser = async (req, res, next) => {
    const {points} = req.body;
    const uid = req.params.uid;

    try {
        const userId = zod.validateId(uid);

        if (!userId.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(userId.error.message)
                }
            });
        }

        const validatedPoints = zod.validatePoints(points);

        if (!validatedPoints.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(validatedPoints.error.message)
                }
            });
        }

        const user = await serv.updateUserById(userId.data, validatedPoints.data);

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido actualizado.",
            payload: user
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha podido actualizar el elemento.",
            error: error.message
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
            error: error.message
        });
    }
}