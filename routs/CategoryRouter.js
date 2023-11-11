const express = require("express");
const router = express.Router();
const CategoryController = require("../controlers/CategoryConroler");

router.get("/Categorys", CategoryController.getCategory);
router.get("/Categorys/:category_id", CategoryController.getcategoruid);

router.post("/newCategorys", CategoryController.newCategory);
router.put("/deletecategory/:category_id", CategoryController.deletecategory);
router.put("/updatecategory/:category_id", CategoryController.updatecategory);

module.exports = router;
