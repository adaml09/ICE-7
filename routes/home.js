const express = require("express");
const homePageController = require("../controllers/home")

const router = express.Router();

router.get("/home", homePageController.displayHomePage);

module.exports = router;

