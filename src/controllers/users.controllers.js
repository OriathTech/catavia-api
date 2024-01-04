export const getUsers = async (req, res, next) => {
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

export const putUser = async (req, res, next) => {
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

export const deleteUser = async (req, res, next) => {
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