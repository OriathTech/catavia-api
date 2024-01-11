import * as serv from '../services/sessions.services.js';

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const token = await serv.loginJWT(email, password);

        if (!token) {
            return res.status(400).json({
                status: "warning",
                message: "Email o contraseña incorrecta.",
            });
        }

        res.cookie(`jwt`, token, { httpOnly: true, maxAge: 3 * 60 * 60 * 1000 });
        return res.status(200).json({
            status: "success",
            message: "Estas logeado."
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Ocurrio un error en el login.",
            error: error
        });
    }
}

export const registerUser = async (req, res, next) => {
    const { name, birthday, email, whatsapp, password } = req.body;

    try {
        const token = await serv.register(name, birthday, email, whatsapp, password);

        if (!token) {
            return res.status(400).json({
                status: "warning",
                message: "El usuario ya se encuentra registrado."
            });
        }


        res.cookie(`jwt`, token, { httpOnly: true, maxAge: 3 * 60 * 60 * 1000 });
        return res.status(200).json({
            status: "success",
            message: "Te has registrado correctamente."
        });


    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Ocurrio un error en el registro.",
            error: error
        });
    }
}

export const logout = async (req, res, next) => {

    try {

        res.clearCookie('jwt');
        res.status(200).json({
            status: "success",
            message: 'Sesión cerrada exitosamente.'
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Ocurrio un error en el logout.",
            error: error
        });
    }
}