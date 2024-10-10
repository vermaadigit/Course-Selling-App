const express = require('express')
const { userRouter } = require('./Routes/user')
const { adminRouter } = require('./Routes/admin')
const { courseRouter } = require('./Routes/course')

const app = express()

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter)


app.listen(3000)