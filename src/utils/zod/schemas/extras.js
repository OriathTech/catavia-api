import { z } from "zod";

const extraSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Extra name must be a string.',
    }),
    category: z.string(
        z.enum(['service', 'packaging', 'decoration', 'increment']),
        {
            invalid_type_error: 'Extra category must be a string of enum category.',
        }
    ).toLowerCase(),
    pricexu: z.number(
        {
            invalid_type_error: 'Extra pricexu must be a number.',
        }
    ).nonnegative(),
    status: z.boolean({
        invalid_type_error: "Extra status must be a boolean."
    }),
    inall: z.boolean({
        invalid_type_error: "Extra inall must be a boolean."
    })
})

export default extraSchemaZ;