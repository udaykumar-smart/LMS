const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4040;

const db = require('./util/database');

// routes
//const employeeRoutes = require('./routes/employees');
const usersRoutes = require('./routes/users');
const booksRoutes=require('./routes/book');
const historyRoutes=require('./routes/history');
const bookBorrowRoutes=require('./routes/bookBorrow');

// cors middleware
app.use(cors());

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/employees', employeeRoutes);
app.use('/users', usersRoutes);
app.use('/book', booksRoutes);
app.use('/history', historyRoutes);
app.use('/bookBorrow',  bookBorrowRoutes);

// error handling middleware
app.use((err, req, res, next) => {
    res.send({
        error: true,
        message: 'Server Error',
        err: err
    });
});

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});
