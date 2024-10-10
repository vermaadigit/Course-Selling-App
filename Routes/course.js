function createCourseRoutes(app) {

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
}

module.exports = {
    createCourseRoutes : createCourseRoutes
}