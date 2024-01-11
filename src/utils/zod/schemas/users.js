import { z } from "zod";

const userSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Name must be a string.'
    }),
    password: z.string({
        invalid_type_error: 'Password must be a string.'
    }),
    email: z.string({
        invalid_type_error: 'Email must be a string.'
    }),
    points: z.number({
        invalid_type_error: 'Points must be a number.',
    }),
    birthday: z.date({
        invalid_type_error: 'Birthday must be a date.'
    }),
    whatsapp: z.string({
        invalid_type_error: 'WhatsApp must be a string.'
    }),
    tickets: z.array(
        z.object({
            ticketId: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
                message: 'Ticket ID must be a valid ObjectId.',
            }),
        })
    ),
});

export default userSchemaZ;