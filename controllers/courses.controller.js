
let {courses} = require('../data/courses')
const Course = require('../models/course.model')

const getAllCourses = async  (req,res) =>{

  const courses = await Course.find()
    res.json(courses)

}


const getOneCourse = async (req, res) => {
try{
  const id = req.params.id;
  const course = await Course.findById(req.params.id)
      if(!course){
          return res.status(404).json({msg:`course number ${id} not found`})
      }
      res.json(course);
}catch(err){
  return res.status(400).json({msg:"invalid object id"})
}
  }

  const addOneCourse = async (req,res)=>{
   

      
        const newCourse = new Course(req.body)

        await newCourse.save();

       
    
        res.status(201).json(newCourse)
    
  }

  const updateCourse =  async (req, res) => {
   try{
    const id = req.params.id;
    const updatedCourse = await  Course.findByIdAndUpdate(id, { $set: {...req.body} })
    res.status(200).json(updatedCourse);

   }catch(e){
    return res.status(404).json({msg:"course not found"})

   }



  }

  const deleteCourse = async (req, res) => {
    try{
      await Course.deleteOne({_id:req.params.id});
      res.status(200).json({ success: true, msg: `Course with ID  deleted successfully` });

    }catch(e){
      return res.status(404).json({ msg: `Course with ID  not found` });

    }


    
  
  
   
  }


  module.exports = {
    getAllCourses,
    getOneCourse,
    addOneCourse,
    updateCourse,
    deleteCourse
  }