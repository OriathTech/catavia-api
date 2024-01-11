import passport from 'passport';

export const auth = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, (error, user, info) => {
            if (error) {
                return res.status(401).send({
                    status: "error",
                    message: "Hubo un error al auntenticar.",
                    error: error
                });
            }

            if (!user) {
                return res.status(401).send({
                    status: "warning",
                    message: "No se a podido autenticar al usuario.",
                });
            }
            req.user = user;
            next();
        })(req, res, next);
    };
};