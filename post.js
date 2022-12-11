import mongoose from "mongoose";

const Post = new mongoose.Schema({
        answer0: {type: String},
        answer1: {type: String},
        answer2: {type: String},
        answer3: {type: String},
        answer4: {type: String},
        name: {type: String},
})

export default mongoose.model('Post', Post)