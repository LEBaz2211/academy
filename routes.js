let express = require("express")

let router = express.Router()

let userController = require('./controllers/userController')
let lectureController = require('./controllers/lectureController')

router.get('/', (req, res) => res.redirect('/lectures'))

//User related routes

router.get('/login', userController.userFormLogin)

router.post('/login', userController.userLogin)

router.get('/lectures/register/:idlecture', userController.userLectureRegister)

router.get('/cart', userController.userCart)

router.get('/cart/finish', userController.userCartFinish)

router.get('/cart/thanks', userController.userCartThanks)

//Lecture related routes

router.get('/lectures', lectureController.lectureList)

router.get('/lectures/add', lectureController.lectureFormAdd)

router.post('/lectures/add', lectureController.lectureNew)

module.exports = router