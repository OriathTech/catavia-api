import { z } from "zod";

const itemCart = z.object({
    _id: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Id must be a valid ObjectId.',
    }).required(),
    quantity: z.number().int().gte(1)
});


const cartSchemaZ = z.object({
    products: z.array(itemCart).required(),
    deliveryDate: z.date()
})

export default cartSchemaZ;