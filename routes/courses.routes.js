

const express = require('express')
const router = express.Router()
const courseController = require('../controllers/courses.controller')
const { query,validationResult, body } = require('express-validator');


router.get('/',courseController.getAllCourses)

router.get('/:id',courseController.getOneCourse)

  router.post('/',
  [  body('title')
  .isLength({min:2}) ,
  body('price')
  // .withMessage('price is required')
  .isLength({min:1})],courseController.addOneCourse)


  router.patch('/:id', courseController.updateCourse)




router.delete('/:id',courseController.deleteCourse);

module.exports = router