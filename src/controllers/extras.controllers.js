import * as serv from "../services/extras.services.js";
import * as zod from "../utils/zod/validations.js"
import extraSchemaZ from "../utils/zod/schemas/extras.js";

export const getExtras = async (req, res, next) => {
    try {
        const extras = await serv.findExtras();

        return res.status(200).json({
            status: "success",
            message: "Se han encontrado los elementos.",
            payload: extras
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo encontrar los elementos.",
            error: error
        });
    }
}

export const postExtra = async (req, res, next) => {
    const info = req.body;

    try {
        const data = zod.validateNewElement(extraSchemaZ, info, ["name"])

        if (!data.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(data.error.message)
                }
            });
        }

        const extras = await serv.createExtra(data.data);

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido creado.",
            payload: extras
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo crear el elemento.",
            error: error
        });
    }
}

export const putExtra = async (req, res, next) => {
    const eid = req.params.eid;
    const info = req.body;

    try {
        const extraId = zod.validateId(eid);

        if (!extraId.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(extraId.error.message)
                }
            });
        }

        const data = zod.validateElement(extraSchemaZ, info);

        if (!data.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(data.error.message)
                }
            });
        }

        console.log(data.data)

        const extra = await serv.updateExtraById(extraId.data, data.data);

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido actualizado.",
            payload: extra
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo actualizar el elemento.",
            error: error
        });
    }
}

export const deleteExtra = async (req, res, next) => {
    const eid = req.params.eid;

    try {
        const extraId = zod.validateId(eid);

        if (!extraId.success) {
            return res.status(422).json({
                status: "error",
                message: "Error de validación",
                errors: {
                    message: JSON.parse(extraId.error.message)
                }
            });
        }

        const extra = await serv.deleteExtraById(extraId.data);

        if (extra) {
            return res.status(200).json({
                status: "success",
                message: "El elemento ha sido eliminado.",
                payload: extra
            });
        };

        return res.status(200).json({
            status: "warning",
            message: "No se pudo eliminar el elemento, se encuentra en uno o más productos."
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo eliminar el elemento.",
            error: error
        });
    }
}