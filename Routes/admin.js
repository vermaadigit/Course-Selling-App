const { Router } = require("express")
const adminRouter = Router()

adminRouter.post('/signup', function(req, res) {
    res.json({
        message : 'signup Endpoint'
    })
})

adminRouter.post('/signin', function(req, res) {
    res.json({
        message : 'signin Endpoint'
    })
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