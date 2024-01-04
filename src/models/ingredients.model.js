import { Schema, model } from "mongoose";

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pricexg: {
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

const ingredientModel = model("Ingredients", ingredientSchema);

export default ingredientModel;