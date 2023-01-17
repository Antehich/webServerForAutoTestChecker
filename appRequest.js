import mongoose from "mongoose";

const appRequest = new mongoose.Schema({
    questionText: {type: String},
    questionOption0: {type: String},
    questionOption1: {type: String},
    questionOption2: {type: String},
    questionOption3: {type: String},
    rightOption: {type: String},
})

export default mongoose.model('appRequest', appRequest, 'questionsDatabase')
