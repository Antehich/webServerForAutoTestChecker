import express from 'express'
import mongoose from 'mongoose'
import userRouter from "./userRouter.js"
import appRouter from "./appRouter.js"
import * as dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()
const PORT = process.env.PORT
const DB_URL = `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@cluster0.x5reld8.mongodb.net/?retryWrites=true&w=majority`
const app = express()

const corsOptions = {
    origin : ['http://localhost:3000' ]
}

app.use(express.json())
app.use('/api/userRequests',cors(corsOptions), userRouter)
app.use('/api/appRequests',cors(corsOptions), appRouter)


async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('1'))
    } catch (e){
        console.log(e)
    }
}

startApp()