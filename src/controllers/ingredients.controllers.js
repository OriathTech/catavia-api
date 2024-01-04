export const getIngredients = async (req, res, next) => {
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

export const postIngredient = async (req, res, next) => {
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

export const putIngredient = async (req, res, next) => {
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

export const deleteIngredient = async (req, res, next) => {
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