const express = require('express');
const {saveUserRegister,userLogin} = require('../controllers/RegisterController');
const auth = require('../middlewares/authMiddleware');

const route=express.Router();

route.post('/login', userLogin);
route.post('/register', saveUserRegister);

route.get('/private/post',auth,saveUserRegister);


module.exports=route;