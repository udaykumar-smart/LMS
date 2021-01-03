const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../util/database');
const config = require('../config/config.json');


const checkUserEmail = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM users
        WHERE email='${req.params.email}'
    `;
    db.query(checkAvailability).then(dbRes => {
        if (dbRes.rows.length > 0) {
            next();
        } else {
            res.json({
                error: true,
                message: 'No user found with the ID'
            });
        }
    });
}

// const checkEmailAvailability = (req, res, next) => {
//     const query = `SELECT * FROM users WHERE email='${req.body.email}' `;
//     db.query(query).then(dbRes => {
//         if (dbRes.rows.length > 0) {
//             res.json({
//                 error: true,
//                 message: 'Email already exists'
//             });
//         } else {
//             next();
//         }
//     }).catch(dbErr => {
//         next(dbErr);
//     });
// }

//const addUser=router.post('/register', checkEmailAvailability, (req, res, next) => {
    //router.post('/register', checkEmailAvailability, (req, res, next) => {

const addUser= (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const query = `
        INSERT INTO users
        VALUES (
            '${req.body.email}',
            '${hashedPassword}',
            '${req.body.name}',
            'User'
        )`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'User registered successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}
// const addAdmin= (req, res, next) => {
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(req.body.password, salt);
//     const query = `
//         INSERT INTO users
//         VALUES (
//             '${req.body.email}',
//             '${hashedPassword}',
//             '${req.body.name}',
//             'Admin',
//         )`;
//     db.query(query).then(dbRes => {
//         res.json({
//             error: false,
//             message: 'User registered successfully'
//         });
//     }).catch(dbErr => {
//         next(dbErr);
//     });
// }

const register= (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    console.log(salt)
    const query = `
        INSERT INTO users
        VALUES (
            '${req.body.email}',
            '${hashedPassword}',
            '${req.body.name}',
            'User'
        )`;

    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'User registered successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

//router.post('/login', (req, res, next) => {

const checkUserLogin=(req, res, next) => {
    const query = `
        SELECT * FROM users
        WHERE email='${req.body.email}'
    `;
    db.query(query).then(dbRes => {
        if (dbRes.rows.length === 0) {
            res.json({
                error: true,
                message: 'Email not found. Please Register'
            });
        } else {
            const passwordMatched = bcrypt.compareSync(req.body.password, dbRes.rows[0].password);
            if (passwordMatched) {
                const payload = {
                    email: dbRes.rows[0].email,
                    name: dbRes.rows[0].name,
                    role: dbRes.rows[0].role
                };
                const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '1hr'});
                res.json({
                    error: false,
                    message: 'Login Successfull',
                    token: token
                });
            } else {
                res.json({
                    error: true,
                    message: dbRes.rows[0].password
                    //message: 'Invalid credentials'
                });
            }
        }
    }).catch(dbErr => {
        next(dbErr);
    })
}


const getAllUsers = (req, res, next) => {
    const query = 'SELECT * FROM users';
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            employees: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const updateUser = (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const updateQuery = `
        UPDATE users
        SET 
            name='${req.body.name}', 
            password='${hashedPassword}', 
            role='${req.body.role}'
        WHERE email='${req.params.email}'
    `;
    db.query(updateQuery).then(dbRes => {
        res.json({
            error: false,
            message: 'User details updated successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const deleteUser = (req, res, next) => {
    const query = `
        DELETE FROM users
        WHERE email='${req.params.email}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'User Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

module.exports = {
    // checkEmailAvailability,
    checkUserEmail,
    getAllUsers,
    addUser,
    checkUserLogin,
    updateUser,
    deleteUser,
    register
    //addAdmin
    
};