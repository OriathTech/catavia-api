export const postThumbnail = async (req, res, next) => {
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

export const deleteThumbnail = async (req, res, next) => {
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