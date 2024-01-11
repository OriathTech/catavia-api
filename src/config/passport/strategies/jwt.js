import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { findUserById } from '../../../services/users.services.js';

const cookieExtractor = (req) => {
    const token = req.cookies ? req.cookies.jwt : null;
    return token;
}

const options = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.JWT_SECRET
}

export const strategyJWT = new JwtStrategy(options, async (payload, done) => {
    try {
        const user = await findUserById(payload.user.id);

        if (!user) {
            return done(null, false)
        }

        return done(null, user)

    } catch (error) {
        return done(error, false)
    }
})