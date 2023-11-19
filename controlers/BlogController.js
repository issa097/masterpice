const blog = require("../models/Blog");

const getAllBlog = async (req, res) => {
  try {
    const result = await blog.getAllBlog();
    console.log(result);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const getBlog = async (req, res) => {
  const blog_id = req.params.blog_id;
  try {
    const result = await blog.getBlog(blog_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const getBlogidUser = async (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  try {
    const result = await blog.getBlogidUser(user_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const newblog = async (req, res) => {
  try {
    const { title, content, user_id, created_at } = req.body;
    const blog_img = req?.file?.path ? req.file.path : "majdi";

    const newblog = await blog.newblog(
      title,
      content,
      user_id,
      created_at,
      blog_img
    );

    return res.status(200).json(newblog.rows);
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

const Deleteblog = async (req, res) => {
  const blog_id = req.params.blog_id;
  // const userid = req.user.user_id
  try {
    const result = await blog.Deleteblog(blog_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const updateblog = async (req, res) => {
  const blog_id = req.params.blog_id;
  const { title, content, user_id, created_at, blog_img, is_deleted } =
    req.body;
  try {
    const result = await blog.updateblog(
      blog_id,
      title,
      content,
      user_id,
      created_at,
      blog_img,
      is_deleted
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBlog,
  getBlog,
  getBlogidUser,
  newblog,
  Deleteblog,
  updateblog,
};
