import * as rep from '../repositories/repositories.js'
import jwt from 'jsonwebtoken';

import userModel from '../models/user.model.js'
import { comparePassword, createHash } from '../utils/bcrypt/bcrypt.js';

export const loginJWT = async (email, password) => {

    try {
        const user = await rep.findOneByFilter(userModel, { email: email });

        if (!user) {
            return null;
        }

        if (!comparePassword(password, user.password)) {
            return null;
        }

        const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '3h' });
        return token;

    } catch (error) {
        throw error;
    }
}

export const register = async (name, birthday, email, whatsapp, password) => {
    try {
        const user = await rep.findOneByFilter(userModel, { email: email });

        if (user) {
            return null;
        }

        const hashPassword = createHash(password);

        const newUser = await rep.createOne(userModel, {
            name,
            birthday,
            email,
            whatsapp,
            password: hashPassword
        })

        const token = jwt.sign({ user: { id: newUser._id } }, process.env.JWT_SECRET, { expiresIn: '3h' });
        return token;

    } catch (error) {
        throw error
    }
}

