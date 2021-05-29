const express = require('express')
const router = express.Router()
const {HELLO} = require("../controllers/movies.controller");


router.get('hello',HELLO)

module.exports = router;
