import { Schema, model } from "mongoose";

const extraSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pricexu: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: Boolean,
        default: true 
    }
})

const extraModel = model("Extras", extraSchema);

export default extraModel;