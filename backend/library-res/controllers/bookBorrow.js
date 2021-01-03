const db = require('../util/database');
//const { v4: uuidv4 } = require('uuid');

const checkEmail = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM bookborrow
        WHERE email='${req.params.email}'
    `;
    
    db.query(checkAvailability).then(dbRes => {
        if (dbRes.rows.length > 0) {
            res.json({
                error: false,
                // message: 'No book found with the ID'
                book: dbRes.rows
            });
        } else {
            res.json({
                error: true,
                message: 'No book found with the ID'
            });
        }
    });
}

const getAllBookBorrow = (req, res, next) => {
    const query = 'SELECT * FROM bookborrow';
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            //book: dbRes.rows
            book_info: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

//const addBookBorrow = (req, res, next) => {
    //'${req.body.date_issued}',
    //'${req.body.status}'
const requestBookBorrow = (req, res, next) => {
    const query = `
        INSERT INTO bookborrow
        VALUES (
            '${req.body.email}',
            ${req.body.book_id},
            '${req.body.due_date}',
            'Request'
        )`;
    db.query(query).then(dbRes => {
        res.json({
            error: false
            //book_info: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const updateBookBorrow = (req, res, next) => {
    const updateQuery = `
        UPDATE bookborrow
        SET 
            book_id=${req.body.book_id}, 
            date_issued='${req.body.date_issued}',
            due_date='${req.body.due_date}',
            status='${req.body.status}'
        WHERE email='${req.params.email}'
            
    `;
    db.query(updateQuery).then(dbRes => {
        res.json({
            error: false,
            message: 'Book details updated successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const deleteBookBorrow = (req, res, next) => {
    const query = `
        DELETE FROM bookborrow
        WHERE email='${req.params.email}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'Book Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

// const deleteBooks = (req, res, next) => {
//     const query = `
        
//         INSERT INTO deletebook Select * from book where book_id=${req.params.book_id};
//         DELETE FROM book WHERE book_id=${req.params.book_id};
//     `;
//     db.query(query).then(dbRes => {
//         res.json({
//             error: false,
//             message: 'Book Deleted Successfully'
//         });
//     }).catch(dbErr => {
//         next(dbErr);
//     });
// }

module.exports = {
    
    checkEmail,
    getAllBookBorrow,
    requestBookBorrow,
    updateBookBorrow,
    deleteBookBorrow
};
//INSERT INTO bookborrow values(book_id,book_title,category_id,author,publisher_name,status) select book_id,book_title,category_id,author,publisher_name, status from book;
// INSERT INTO deletebook Select * from book where book_id=${req.params.book_id};
//         DELETE FROM book WHERE book_id=${req.params.book_id};
//INSERT INTO book (book_id, book_title, category_id, author, book_copies, book_pub, publisher_name, isbn, copyright_year, date_receive, date_added, status)


// CREATE TABLE IF NOT EXISTS `borrowdetails` (
//   `borrow_details_id` int(11) NOT NULL AUTO_INCREMENT,
//   `book_id` int(11) NOT NULL,
//   `borrow_id` int(11) NOT NULL,
//   `borrow_status` varchar(50) NOT NULL,
//   `date_return` varchar(100) NOT NULL,
//   PRIMARY KEY (`borrow_details_id`)
// ) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=165 ;

// --
// -- Dumping data for table `borrowdetails`
// --

// INSERT INTO `borrowdetails` (`borrow_details_id`, `book_id`, `borrow_id`, `borrow_status`, `date_return`) VALUES
// (164, 16, 484, 'pending', ''),
// (162, 15, 482, 'pending', ''),
// (163, 15, 483, 'returned', '2014-03-21 00:30:51');

// -- --------------------------------------------------------

// --
// -- Table structure for table `category`
// --

// CREATE TABLE IF NOT EXISTS `category` (
//   `category_id` int(11) NOT NULL AUTO_INCREMENT,
//   `classname` varchar(50) DEFAULT NULL,
//   PRIMARY KEY (`category_id`),
//   UNIQUE KEY `category_id` (`category_id`),
//   KEY `classid` (`category_id`)
// ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=801 ;