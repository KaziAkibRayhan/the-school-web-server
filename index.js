const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('server running!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses-option/:id', (req, res) => {
    const coursesCategory = courses?.filter(course => course.course_option == req.params.id)
    res.send(coursesCategory)
})

app.get('/courses/:id', (req, res) => {
    const singleCourse = courses?.find(course => course.id == req.params.id)
    res.send(singleCourse)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})