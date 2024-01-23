import { z } from "zod";

const extraSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Extra name must be a string.',
    }).optional(),
    pricexu: z.number(
        {
            invalid_type_error: 'Extra pricexu must be a number.',
        }
    ).nonnegative().optional(),
    status: z.boolean({
        invalid_type_error: "Extra status must be a boolean."
    }).optional()
})

export default extraSchemaZ;