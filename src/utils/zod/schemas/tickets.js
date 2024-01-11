import { z } from "zod";

const itemProduct = z.object({
    name: z.string(),
    quantity: z.number().int().min(1),
    price: z.number().min(0),
});

const ticketSchemaZ = z.object({
    user: z.object({
        userId: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
            message: 'User ID must be a valid ObjectId.',
        }),
        email: z.string().email(),
    }),
    purchaseDate: z.date(),
    deliveryDate: z.date(),
    products: z.array(itemProduct),
    total: z.number().min(0),
});

export default ticketSchemaZ;