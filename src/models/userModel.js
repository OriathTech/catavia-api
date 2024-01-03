import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
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
    }
})

const userModel = model("Users", userSchema);

export default userModel;