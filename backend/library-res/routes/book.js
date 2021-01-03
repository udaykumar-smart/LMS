const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const booksController = require('../controllers/book');

//Authentication code
// router.get('/', auth.checkAuth, employeeController.getAllEmployees);

// router.post('/', auth.checkAdmin, employeeController.addEmployee);

// router.put('/:id', auth.checkAdmin, employeeController.checkEmployeeId, employeeController.updateEmployee);

// router.delete('/:id', auth.checkAdmin, employeeController.checkEmployeeId, employeeController.deleteEmployee);

//router.get('/allBooks',auth.checkAdmin, booksController.getAllBooks);
//router.get('/allBooks',auth.checkAdmin, booksController.getAllBooks);
router.get('/allBooks',auth.checkAuth, booksController.getAllBooks);

router.get('/oneBook/:book_id',auth.checkAdmin, booksController.checkBookId);
//router.get('/oneBook/:book_id',auth.checkAuth, booksController.checkBookId);

router.post('/addBooks',auth.checkAdmin, booksController.addBooks);

//router.put('/:book_id',  booksController.checkBookId, booksController.updateBooks);
router.put('/updateBook/:book_id', auth.checkAdmin, booksController.updateBooks);

router.delete('/:book_id', auth.checkAdmin, booksController.deleteBooks);

module.exports = router;
