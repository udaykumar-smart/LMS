const db = require('../util/database');
//const { v4: uuidv4 } = require('uuid');

const checkBookId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM book
        WHERE book_id=${req.params.book_id}
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

const getAllBooks = (req, res, next) => {
    const query = 'SELECT * FROM book';
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

//INSERT INTO bookborrow values(book_id,book_title,category_id,author,publisher_name,status) select book_id,book_title,category_id,author,publisher_name, status from book;
// INSERT INTO deletebook Select * from book where book_id=${req.params.book_id};
//         DELETE FROM book WHERE book_id=${req.params.book_id};
//INSERT INTO book (book_id, book_title, category_id, author, book_copies, book_pub, publisher_name, isbn, copyright_year, date_receive, date_added, status)
const addBooks = (req, res, next) => {
    const query = `
    
        INSERT INTO book
        VALUES (
            ${req.body.book_id},
            '${req.body.book_title}', 
            ${req.body.category_id}, 
            '${req.body.author}',
            ${req.body.book_copies},
            '${req.body.book_pub}',
            '${req.body.publisher_name}',
            '${req.body.isbn}',
            ${req.body.copyright_year},
            '${req.body.date_added}',
            '${req.body.status}'
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

const updateBooks = (req, res, next) => {
    const updateQuery = `
        UPDATE book
        SET 
            book_title='${req.body.book_title}', 
            category_id=${req.body.category_id}, 
            author='${req.body.author}',
            book_copies=${req.body.book_copies},
            book_pub='${req.body.book_pub}',
            publisher_name='${req.body.publisher_name}',
            isbn='${req.body.isbn}',
            copyright_year=${req.body.copyright_year},
            date_added='${req.body.date_added}',
            status='${req.body.status}'
        WHERE book_id=${req.params.book_id}
            
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

// const deleteBooks = (req, res, next) => {
//     const query = `
//         DELETE FROM book
//         WHERE book_id='${req.params.book_id}'
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

const deleteBooks = (req, res, next) => {
    const query = `
        
        INSERT INTO deletebook Select * from book where book_id=${req.params.book_id};
        DELETE FROM book WHERE book_id=${req.params.book_id};
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

module.exports = {
    checkBookId,
    getAllBooks,
    addBooks,
    updateBooks,
    deleteBooks
};

