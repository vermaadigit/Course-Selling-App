const { Router } = require("express")
const adminRouter = Router()
const { adminModel } = require("../db")

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

adminRouter.post('/', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

adminRouter.put('/', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

adminRouter.get('/bulk', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

module.exports = {
    adminRouter : adminRouter
}