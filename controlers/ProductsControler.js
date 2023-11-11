const blog = require("../models/products");


const newblog = async (req, res) => {
  try {
    const { product_name, category_id, price, user_id, product_dis } = req.body;
    const product_img = req?.file?.path ? req.file.path : "majdi";
    // console.log(
    //   product_name,
    //   category_id,
    //   price,
    //   user_id,
    //   product_img,
    //   product_dis
    // );
    const newblog = await blog.newblog(
      product_name,
      category_id,
      price,
      user_id,
      product_img,
      product_dis
    );

    return res.status(200).json(newblog.rows);
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

const getBlogs = async (req, res) => {
  try {
    const result = await blog.getAllblogs();
    console.log(result);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};
const getblog = async (req, res) => {
  const product_id = req.params.id;
  try {
    const result = await blog.getBlog(product_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};
// const getBlogid = async (req, res) => {
//   const user_id = req.params.userid;
//   try {
//     const result = await blog.getBlogid(user_id);
//     console.log(result);
//     return res.status(200).json(result.rows);
//   } catch (error) {
//     throw error;
//   }
// };

const deleteblog = async (req, res) => {
  const product_id = req.params.id;
  try {
    const result = await blog.deleteblog(product_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const updateblog = async (req, res) => {
  const blog_id = req.params.id;
  const {
    product_name,
    category_id,
    price,
    user_id,
    product_img,
    product_dis,
    is_deleted
  } = req.body;
  try {
    const result = await blog.updateblog(
      blog_id,
      product_name,
      category_id,
      price,
      user_id,
      product_img,
      product_dis,
      is_deleted
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newblog,
  getBlogs,
  getblog,
  deleteblog,
  updateblog,
  //   getBlogid,
};
