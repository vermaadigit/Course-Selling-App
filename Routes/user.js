const { Router } = require("express")
const { userModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")


const userRouter = Router()

    userRouter.post('/signup', async function(req, res) {
        const { email, password, firstName, lastName } = req.body // Todo : Adding Zod validation
        // Todo : hash the password so plaintext pw is not stored in DB

        // Todo :  Put it in Try catch Block
        await userModel.create({
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName
        })


        res.json({
            message : 'Signup Succeeded'
        })
    })
    
    userRouter.post('/signin', async function(req, res) {
        const { email, password } = req.body

        //Todo : ideally password should be hashed, and hence you can't compare the user provided password and the database password 
        const user = await userModel.findOne({
            email : email,
            password : password
        })

        if (user) {
            const token = jwt.sign({
                id : user._id
            }, JWT_USER_PASSWORD)

            res.json ({
                token : token
            })
        } else {
            res.status(403).json({
                message : 'Incorrect Credentials'
            })
        }
        
    })
    
    userRouter.get('/purchases', function(req, res) {
        res.json({
            message : 'Purchases Endpoint'
        })
    })


module.exports = {
    userRouter : userRouter
}