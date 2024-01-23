import { z } from "zod";

const userSchemaZ = z.object({
    name: z.string({
        invalid_type_error: 'Name must be a string.'
    }).optional(),
    password: z.string({
        invalid_type_error: 'Password must be a string.'
    }).optional(),
    email: z.string({
        invalid_type_error: 'Email must be a string.'
    }).optional(),
    points: z.number({
        invalid_type_error: 'Points must be a number.',
    }).optional(),
    birthday: z.string().refine((value) => /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value), {
        message: 'Birthday must be a String with format day/month/year.'
    }).optional(),
    whatsapp: z.string().refine((value) => /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(value), {
        message: 'Whatsapp must be a String and a valid phone number.'
    }).optional(),
    tickets: z.array(
        z.object({
            ticketId: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
                message: 'Ticket ID must be a valid ObjectId.',
            }),
        })
    ).optional(),
});

export default userSchemaZ;