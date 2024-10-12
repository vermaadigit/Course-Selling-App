const express = require('express')
const mongoose = require('mongoose')

const { userRouter } = require('./Routes/user')
const { adminRouter } = require('./Routes/admin')
const { courseRouter } = require('./Routes/course')
const app = express()

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter)


async function main() {
    await mongoose.connect("mongodb+srv://admin:Aditya112233@courseappserver.lq0xy.mongodb.net/coursera-app")
    app.listen(3000)
    console.log('Listing on port 3000')
}

main()