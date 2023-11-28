const express = require("express");
const { subscribe } = require("../Controller/SubscribeController");
const router = express.Router();

router.post("/subscribe", subscribe);

module.exports = router;
