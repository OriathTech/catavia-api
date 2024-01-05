import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    pricexm: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: Boolean,
        default: true 
    },
    inall: {
        type: Boolean,
        default: false
    }
})

const serviceModel = model("Services", serviceSchema);

export default serviceModel;