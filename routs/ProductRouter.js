const express = require("express");

const router = express.Router();
const ProductsController = require("../controlers/ProductsControler");
const uploadImg = require("../middlewares/MulterMiddlewares");
const decode = require("../middlewares/auth");

router.post("/product", uploadImg.uploadImg, ProductsController.newblog);

router.get("/products", ProductsController.getBlogs);
router.get("/blog/:product_id", ProductsController.getblog);
router.get("/product/:category_id", ProductsController.product);
router.get("/product/:user_id", ProductsController.getBloguserid);

// GET /blogs?page=2&pageSize=5

router.put("/deleteproduct/:id", ProductsController.deleteproduct);
router.put("/updateproduct/:id", ProductsController.updateproduct);

module.exports = router;
