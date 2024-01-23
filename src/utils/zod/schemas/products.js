import { z } from "zod";

const itemThumbnail = z.object({
    url: z.string().url().nullable().optional()
});

const itemIngredient = z.object({
    ingredient: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Ingredient must be a valid ObjectId.',
    }).optional(),
    quantity: z.number().optional()
});

const itemExtra = z.object({
    extra: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Extra must be a valid ObjectId.',
    }).optional(),
    quantity: z.number().optional()
});

const productSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Product name must be a string.'
    }).optional(),
    description: z.string({
        invalid_type_error: 'Product description must be a string.'
    }).max(140, { message: "Must be 140 or fewer characters long" }).optional(),
    status: z.enum(['online', 'offline', 'featured'],
        {
            invalid_type_error: 'Extra category must be a string of enum category.'
        }
    ).optional(),
    price: z.number({
        invalid_type_error: 'Product price must be a number.'
    }).nonnegative().optional(),
    category: z.array(
        z.enum(['salados', 'chocolatería', 'tortas', 'tartas', 'postres', 'individuales', 'frutales', 'regalos', 'temporada', 'catering', 'desayunos', 'panificados'])
    ).optional(),
    thumbnails: z.array(itemThumbnail).optional(),
    ingredients: z.array(itemIngredient).optional(),
    extras: z.array(itemExtra).optional()
});


export default productSchemaZ;