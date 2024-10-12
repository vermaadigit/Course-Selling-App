const { Router } = require("express")
const adminRouter = Router()
const { adminModel } = require("../db")
const jwt = require("jsonwebtoken")
const JWT_ADMIN_PASSWORD = "notserve"

adminRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body; // Todo : Adding Zod validation
    // Todo : hash the password so plaintext pw is not stored in DB

    // Todo :  Put it in Try catch Block
    await adminModel.create({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })

    res.json({
        message : 'Signup Succeeded'
    })
})

adminRouter.post('/signin', async function(req, res) {
    const { email, password } = req.body

    //Todo : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
    const admin = await adminModel.findOne({
        email : email,
        password : password
    })

    if (admin) {
        const token = jwt.sign({
            id : admin._id
        }, JWT_ADMIN_PASSWORD)

        res.json ({
            token : token
        })
    } else {
        res.status(403).json({
            message : 'Incorrect Credentials'
        })
    }
})

adminRouter.post('/course', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

adminRouter.put('/course', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

adminRouter.get('/course/bulk', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

module.exports = {
    adminRouter : adminRouter
}