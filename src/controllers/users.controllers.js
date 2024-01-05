export const getUsers = async (req, res, next) => {
    try {
        return res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        return res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const putUser = async (req, res, next) => {
    try {
        return res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        return res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        return res.status(200).send({
            status: "success",
            message: "placeholder",
        });

    } catch (error) {
        return res.status(400).send({
            status: "error",
            message: "placeholder",
            error: error
        });
    }
}