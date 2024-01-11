import { z } from "zod";

const ingredientSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Ingredient name must be a string.'
    }),
    category: z.string(
        z.enum(['primera', 'segunda', 'tercera', 'cuarta']),
        {
            invalid_type_error: 'Ingredient category must be a string of enum category.'
        }
    ).toLowerCase(),
    pricexg: z.number(
        {
            invalid_type_error: 'Ingredient pricexg must be a number.'
        }
    ).nonnegative(),
    status: z.boolean({
        invalid_type_error: "Ingredient status must be a boolean."
    }),
    inall: z.boolean({
        invalid_type_error: "Ingredient inall must be a boolean."
    })
})

export default ingredientSchemaZ;