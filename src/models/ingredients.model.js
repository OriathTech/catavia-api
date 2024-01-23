import { Schema, model } from "mongoose";

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pricexg: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: Boolean,
        default: true 
    }
})

const ingredientModel = model("Ingredients", ingredientSchema);

export default ingredientModel;