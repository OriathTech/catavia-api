import { z } from "zod";

const ingredientSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Ingredient name must be a string.'
    }).optional(),
    pricexg: z.number(
        {
            invalid_type_error: 'Ingredient pricexg must be a number.'
        }
    ).nonnegative().optional(),
    status: z.boolean({
        invalid_type_error: "Ingredient status must be a boolean."
    }).optional()
})

export default ingredientSchemaZ;