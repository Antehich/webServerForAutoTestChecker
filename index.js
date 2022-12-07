import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import * as dotenv from 'dotenv'

dotenv.config()
const DB_URL = `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@cluster0.x5reld8.mongodb.net/?retryWrites=true&w=majority`
const app = express()
app.use(express.json())
app.use('/autotestchecker/api', router)

async function startApp () {
  try {
    await mongoose.connect(DB_URL)
    app.listen(process.env.PORT, () => console.log(`Server has been started on port ${process.env.PORT}`))
  } catch (e) {
    console.log(`Something went wrong: ${e}`)
  }
}

startApp()
