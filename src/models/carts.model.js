import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    products: {
        type: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Products',
                    required: true
                }
            }
        ],
        default: []
    },
    total: {
        type: Number,
        default: 0
    }
})

const cartModel = model("Carts", cartSchema);

export default cartModel;