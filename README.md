# Backend for the teacher evaluation app


## My goals were:

1. write a full CRUD (create, read, update, delete) REST API
2. Realize authirozation
3. Got more familiar Typescript API
4. Practice automated testing with Jest



Link to the frontend:

[Client](https://github.com/oksmelnik/evaluation-front)


* `POST /teacher`: log in as a teacher
* `POST /batch`: create a new batch
* `POST /student`: add new student to the batch
* `POST /:id/student`: add new evaluation for the student
* `GET /batches`: list all batches
* `GET /batches/:id`: one batch
* `GET /students/:id`: list all students
* `GET /evas`: list all evaluations
