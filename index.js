import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import * as dotenv from 'dotenv'



const PORT = 5500
dotenv.config()
const DB_URL = `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@cluster0.x5reld8.mongodb.net/?retryWrites=true&w=majority`
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('1'))
    } catch (e){
        console.log(e)
    }
}

startApp()