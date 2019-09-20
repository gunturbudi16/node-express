var express = require("express");
var router = express.Router();
const controller = require("../controller/index")

/* GET home page. */
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.addFilm);
router.delete("/:id", controller.deleteFilm);
router.put("/:id", controller.updateFilm);

module.exports = router;
