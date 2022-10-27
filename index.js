const express = require('express');
const cors = require('cors');
const courses = require('./data/courses.json');
const coursesCategory = require('./data/category.json');
const app = express();
const port = process.env.POST || 5000;

app.use(cors());

app.get('/category', (request, response) => {
  response.send(coursesCategory);
});
app.get('/courses', (request, response) => {
  response.send(courses);
});
app.get('/courses/:courseId', (request, response) => {
  const id = request.params.courseId;
  const selectedCourse = courses.find(course => course.id === id);
  response.send(selectedCourse);
});
app.get('/category/:categoryId', (request, response) => {
  const id = request.params.categoryId;
  const coursesCategory = courses.filter(
    category => category.categoryId === id
  );
  if (id === '07') {
    response.send(courses);
  } else {
    response.send(coursesCategory);
  }
});

app.listen(port, () => {
  console.log('web server listening on port ', port);
});
