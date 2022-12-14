let express = require("express")

let router = express.Router()

let userController = require('./controllers/userController')
let lectureController = require('./controllers/lectureController')

router.get('/', (req, res) => res.redirect('/lectures'))

//User related routes

router.get('/login', userController.userFormLogin)

router.post('/login', userController.userLogin)

router.get('/lectures/register/:idlecture', userController.userLerctureRegister)

router.get('/cart', userController.userCart)

//Lecture related routes

router.get('/lectures', lectureController.lectureList)

router.get('/lectures/add', lectureController.lectureFormAdd)

router.post('/lectures/add', lectureController.lectureNew)

module.exports = router