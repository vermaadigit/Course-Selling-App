const express = require('express')
const app = express()

app.post('/user/signup', function(req, res) {
    res.json({
        message : 'signup endpoint'
    })
})

app.post('/user/signin', function(req, res) {
    res.json({
        message : 'signin endpoint'
    })
})

app.get('/user/purchases', function(req, res) {
    res.json({
        message : 'Purchases Endpoint'
    })
})

app.post('/course/purchase', function(req, res) {
    res.json({
        message : 'Purchase Endpoint'
    })
})

app.get('/courses', function(req, res) {
    res.json({
        message : 'Courses Endpoint'
    })
})


app.listen(3000)