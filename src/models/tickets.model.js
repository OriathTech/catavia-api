import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
    user: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    products: {
        type: Array,
        default: []
    },
    total: {
        type: Number,
        required: true
    }
})

const ticketModel = model("Tickets", ticketSchema);

export default ticketModel;