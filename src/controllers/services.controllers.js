import * as serv from "../services/services.services.js";

export const getServices = async (req, res, next) => {
    try {
        const services = await serv.findServices();

        return res.status(200).json({
            status: "success",
            message: "Se han encontrado los elementos.",
            payload: services
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo encontrar los elementos.",
            error: error
        });
    }
}

export const postService = async (req, res, next) => {
    const { name, category, pricexu } = req.body;
    try {
        const service = await serv.createService({name, category, pricexu});

        return res.status(200).json({
            status: "success",
            message: "El elemento ha sido creado.",
            payload: service
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se pudo crear el elemento.",
            error: error
        });
    }
}

export const putService = async (req, res, next) => {
    const info = req.body;
    const sid = req.params.eid;

    try {
        const extra = await serv.updateServiceById(sid, info);

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

export const deleteService = async (req, res, next) => {
    const sid = req.params.eid;

    try {
        const extra = await serv.deleteServiceById(sid);

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