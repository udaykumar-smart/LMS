const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const bookBorrowController = require('../controllers/bookBorrow');

//Authentication code
// router.get('/', auth.checkAuth, employeeController.getAllEmployees);

// router.post('/', auth.checkAdmin, employeeController.addEmployee);

// router.put('/:id', auth.checkAdmin, employeeController.checkEmployeeId, employeeController.updateEmployee);

// router.delete('/:id', auth.checkAdmin, employeeController.checkEmployeeId, employeeController.deleteEmployee);

//router.get('/allBooks',auth.checkAdmin, bookBorrowController.getAllBookBorrow);
router.get('/allBookBorrow',auth.checkAuth, bookBorrowController.getAllBookBorrow);

router.get('/checkEmail/:email',auth.checkAdmin, bookBorrowController.checkEmail);
//router.get('/oneBook/:book_id',auth.checkAuth, bookBorrowController.checkEmail);

//router.post('/addBookBorrow',auth.checkAdmin, bookBorrowController.requestBookBorrow);
router.post('/addBookBorrow', bookBorrowController.requestBookBorrow);

//router.put('/:book_id',  booksController.checkBookId, bookBorrowController.updateBookBorrow);
router.put('/updateBookBorrow/:email', auth.checkAdmin, bookBorrowController.updateBookBorrow);

router.delete('/deleteBookBorrow/:email', auth.checkAdmin, bookBorrowController.deleteBookBorrow);

module.exports = router;
// checkEmail,
// getAllBookBorrow,
// addBookBorrow,
// updateBookBorrow,
// deleteBookBorrow
