import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: true
    },
    time: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    thumbnails: {
        type: [
            {
                thumbnail: {
                    type: Schema.Types.ObjectId,
                    ref: 'Thumbnails',
                    required: true
                }
            }
        ],
        default: []
    },
    ingredients: {
        type: [
            {
                ingredient: {
                    type: Schema.Types.ObjectId,
                    ref: 'Ingredients',
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            }
        ],
        default: []
    },
    extras: {
        type: [
            {
                extra: {
                    type: Schema.Types.ObjectId,
                    ref: 'Extras',
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            }
        ],
        default: []
    },
    services: {
        type: [
            {
                service: {
                    type: Schema.Types.ObjectId,
                    ref: 'Services',
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            }
        ],
        default: []
    }
})

const productModel = model("Products", productSchema);

export default productModel;