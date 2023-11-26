const express = require("express")
const router = express.Router();
const CoursesController = "../controlers/CoursesController"


router.post("/CreateCoruses",CoursesController.CreateCoruses)

module.export=router