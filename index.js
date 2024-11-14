

const express = require('express');
const mongoose = require('mongoose');

const app = express()

const url = "mongodb+srv://waleed888:waleed.js@learn-mongodb.3hhwf.mongodb.net/first?retryWrites=true&w=majority&appName=learn-mongodb"

mongoose.connect(url).then(()=>{
  console.log("succes mongodb")
})
const port = 4000;

// parse every thing to JSON
app.use(express.json());

const coursesRouter = require('./routes/courses.routes')

app.use('/api/courses',coursesRouter)
// CRUD (Create/Read/Update/Delete)



  app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
  })