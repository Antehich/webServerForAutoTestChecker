import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";



const PORT = 5000
const DB_URL = `mongodb+srv://antehich:antehich@cluster0.x5reld8.mongodb.net/?retryWrites=true&w=majority`
const app = express()
app.use(express.json())
app.use('/autotestchecker/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('1'))
    } catch (e){
        console.log(e)
    }
}

startApp()