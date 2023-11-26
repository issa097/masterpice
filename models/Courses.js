const db = require("../lib/db");


function CreateCoruses( course_name ,instructor_name ,start_date, end_date ,duration_hours ,level ,location){
    const queryText=`INSERT INTO courses course_name ,instructor_name ,start_date, end_date ,duration_hours ,level ,location  `
    const result=[course_name ,instructor_name ,start_date, end_date ,duration_hours ,level ,location]
    return db.query(queryText,result)
}

module.exports={
    CreateCoruses
}