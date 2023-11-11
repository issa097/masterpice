const express = require("express");

const router = express.Router();
const ProductsController = require("../controlers/ProductsControler");
const { upload } = require("../middlewares/MulterMiddlewares");
const decode = require("../middlewares/auth");
router.post("/product", upload.single("file"), ProductsController.newblog);

router.get("/products", ProductsController.getBlogs);
router.get("/blog/:id", ProductsController.getblog);

router.put("/deleteblog/:id", decode, ProductsController.deleteblog);
router.put("/updateblog/:id", ProductsController.updateblog);

module.exports = router;
