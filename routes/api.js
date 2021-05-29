const express = require('express')
const router = express.Router()
const {HELLO,SEND_DATA} = require("../controllers/movies.controller");


router.get('/hello',HELLO)
router.post('/send',SEND_DATA)

module.exports = router;
