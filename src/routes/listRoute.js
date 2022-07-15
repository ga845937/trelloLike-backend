const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");
const authMiddleware = require("../middlewares/auth");

router.route("/")
  .post(authMiddleware.authJWT, listController.createList)
  .get(authMiddleware.authJWT, listController.readList)
  .put(authMiddleware.authJWT, listController.updateList)
  .delete(authMiddleware.authJWT, listController.deleteList);

module.exports = router;