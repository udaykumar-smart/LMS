const db = require('../util/database');
//const { v4: uuidv4 } = require('uuid');


const hisAllBooks = (req, res, next) => {
    const query = 'select * from deletebook';
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

module.exports = {
    
    hisAllBooks,
    
};


