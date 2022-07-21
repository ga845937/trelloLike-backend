const express = require("express");
const router = express.Router();
const cardController = require("../controller/cardController");
const { authJWT } = require("../middlewares/jwt");

router.route("/")
  .post(authJWT, cardController.createCard)
  .get(authJWT, cardController.readCard)
  .put(authJWT, cardController.updateCard)
  .delete(authJWT, cardController.deleteCard);

module.exports = router;