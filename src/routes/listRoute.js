const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");
const { authJWT } = require("../middlewares/jwt");

router.route("/")
  .post(authJWT, listController.createList)
  .get(authJWT, listController.readList)
  .put(listController.updateList)
  .delete(listController.deleteList);

module.exports = router;