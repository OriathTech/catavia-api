export const getServices = async (req, res, next) => {
    try {
        res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const postService = async (req, res, next) => {
    try {
        res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const putService = async (req, res, next) => {
    try {
        res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const deleteService = async (req, res, next) => {
    try {
        res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}