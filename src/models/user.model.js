import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
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
        type: Date,
        required: true
    },
    whatsapp: {
        type: Number,
        required: true
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