import { z } from "zod";


export function validateElement(schema, data) {
    return schema.safeParse(data, { extra: 'remove' });
}

export function validateNewElement(schema, data, required) {
    const requiredFields = required;

    const result = schema.safeParse(data, { extra: 'remove' });

    if (result.success) {
        const missingFields = requiredFields.filter(field => !(field in result.data));
        if (missingFields.length > 0) {
            return {
                success: false,
                error: {
                    message: `Missing required fields: ${missingFields.join(', ')}`,
                },
            };
        }
    }

    return result;
}

export function validateId(id) {
    const idSchema = z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Id must be a valid ObjectId.',
    }).required()
    return idSchema.safeParse(id, { extra: 'remove' });
}

export function validatePosition(position) {
    const positionSchema = z.string(
        z.enum(['first', 'second', 'third']),
        { invalid_type_error: 'Position must be a string of enum category.', }
    ).toLowerCase().required();
    return schema.safeParse(position, { extra: 'remove' });
}

export function validateUrl(url) {
    const urlSchema = z.string().url().required()
    return schema.safeParse(url, { extra: 'remove' });
}

export function validatePoints(points) {
    const pointsSchema = z.number().int().nonnegative().required()
    return schema.safeParse(points, { extra: 'remove' });
}




