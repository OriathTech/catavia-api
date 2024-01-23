import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    points: {
        type: Number,
        default: 0
    },
    birthday: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    tickets: {
        type: [
            {
                ticketId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Tickets',
                    required: true
                }
            }
        ],
        default: []
    }
})

const userModel = model("Users", userSchema);

export default userModel;