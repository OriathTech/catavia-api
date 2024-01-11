import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        unique:true,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    featured: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        default: 0
    },
    thumbnails: {
        first: {
            url: {
                type: String,
                default: null
            }
        },
        second: {
            url: {
                type: String,
                default: null
            }
        },
        third: {
            url: {
                type: String,
                default: null
            }
        },
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
    }
})

const productModel = model("Products", productSchema);

export default productModel;