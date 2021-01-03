const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const userController = require('../controllers/users');

// router.get('/', auth.checkAuth, userController.getAllUsers);

// router.post('/', auth.checkAdmin, userController.checkUserLogin, userController.addUser);

// router.put('/:id', auth.checkAdmin, userController.checkEmailAvailability);

// //router.delete('/:id', auth.checkAdmin, userController.checkEmployeeId, userController.deleteEmployee);

 router.get('/allUser', userController.getAllUsers);

router.post('/addUser',auth.checkAdmin,userController.addUser);
router.post('/register',userController.register);
//router.post('/addAdmin',auth.checkAdmin,userController.addAdmin);
//newly register persons
//router.post('/register',userController.register);


//router.post('/registerAdmin',auth.checkAdmin,userController.addAdmin);
router.post('/login', userController.checkUserLogin);
//router.post('/', userController.checkUserLogin,userController.addUser);

router.put('/update/:email', auth.checkUser,  userController.updateUser);

router.delete('/remove/:email', auth.checkUser, userController.deleteUser);

module.exports = router;