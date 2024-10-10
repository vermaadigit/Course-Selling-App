const { Router } = require("express")
const courseRouter = Router()

    courseRouter.post('/purchase', function(req, res) {
        res.json({
            message : 'Purchase Endpoint'
        })
    })
    
    courseRouter.get('/preview', function(req, res) {
        res.json({
            message : 'Courses Endpoint'
        })
    })


module.exports = {
    courseRouter : courseRouter
}