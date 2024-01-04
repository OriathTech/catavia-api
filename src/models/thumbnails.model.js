import { Schema, model } from "mongoose";

const thumbnailSchema = new Schema({
    url: {
        type: String,
        required: true
    }
})

const thumbnailModel = model("Thumbnails", thumbnailSchema);

export default thumbnailModel;