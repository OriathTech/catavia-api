import * as serv from "../services/extras.services.js";

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
    const { name, category, pricexm } = req.body;
    try {
        const extras = await serv.createExtra({name, category, pricexm});

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
    const info = req.body;
    const eid = req.params.eid;

    try {
        const extra = await serv.updateExtraById(eid, info);

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
        const extra = await serv.deleteExtraById(eid);

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