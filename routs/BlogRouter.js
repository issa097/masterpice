const express = require("express");
const router = express.Router();
const BlogController = require("../controlers/BlogController");

router.get("/getAllBlog", BlogController.getAllBlog);
router.get("/getBlog/:blog_id", BlogController.getBlog);
router.get("/getBlogidUser/:user_id", BlogController.getBlogidUser);

router.post("/newblog", BlogController.newblog);
router.put("/Deleteblog/:blog_id", BlogController.Deleteblog);
router.put("/updateblog/:blog_id", BlogController.updateblog);

module.exports = router;
