import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
    user: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        email: {
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
    cart: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: []
    },
    total: {
        type: Number,
        required: true
    }
})

const ticketModel = model("Tickets", ticketSchema);

export default ticketModel;