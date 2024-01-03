import { Schema, model } from "mongoose";

const extraSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pricexu: {
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

const extraModel = model("Extras", extraSchema);

export default extraModel;