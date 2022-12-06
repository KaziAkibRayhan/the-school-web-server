const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
const coursesOption = require('./data/course.option.json')

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('server running!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses-category', (req, res) => {
    res.send(coursesOption)
})

app.get('/courses-category/:id', (req, res) => {
    const coursesCategory = courses?.filter(course => course.course_option == req.params.id)
    res.send(coursesCategory)
})

app.get('/courses/:id', (req, res) => {
    const singleCourse = courses?.find(course => course.id == req.params.id)
    res.send(singleCourse)
})

app.get('/courses/purchase/:id', (req, res) => {
    const purchaseCourse = courses?.find(course => course.id == req.params.id)
    res.send(purchaseCourse)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app;