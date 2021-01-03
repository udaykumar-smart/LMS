const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const historyController = require('../controllers/history');

router.get('/historyBooks', historyController.hisAllBooks);



module.exports = router;
