export const postSession = async (req, res, next) => {
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

export const loginUser = async (req, res, next) => {
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

export const logoutUser = async (req, res, next) => {
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

export const getSession = async (req, res, next) => {
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