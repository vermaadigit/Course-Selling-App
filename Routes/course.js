const { Router } = require("express")
const { userMiddleware } = require("../middleware/user")
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router()

    courseRouter.post('/purchase', async function(req, res) {
        const userId = req.userId
        const courseId = req.body.courseId

        const purchase = await purchaseModel.create({
            courseId,
            userId
        })

        res.json({
            message : 'You have Successfully bought the course'
        })
    })
    
    courseRouter.get('/preview', async function(req, res) {

        const courses = await courseModel.find({})
        
        res.json({
            courses
        })
    })


module.exports = {
    courseRouter : courseRouter
}