const Courses = require("../models/Courses")


const CreateCoruses= async(req,res)=>{
    try {
        const {course_name ,instructor_name ,start_date, end_date ,duration_hours ,level ,location}=req.body
        const result = await Courses.CreateCoruses(course_name ,instructor_name ,start_date, end_date ,duration_hours ,level ,location)
        res.json(result)
    } catch (error) {
        
    }
}