const express = require("express");
const router = express.Router();
const WorkShopController = require("../controlers/WorkShop");
const { upload } = require("../middlewares/MulterMiddlewares");

router.get("/getAllWorkShop", WorkShopController.getAllShop);
router.get("/getWorkShopid/:workshop_id", WorkShopController.getShopid);
router.post("/newWorkShop", WorkShopController.newShop);
router.put("/deleteWorkShop/:workshop_id", WorkShopController.deleteShop);
router.put("/updateWorkShop/:workshop_id", WorkShopController.updateShop);

module.exports = router;
