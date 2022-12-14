let express = require("express")

let router = express.Router()

let userController = require('./controllers/userController')
let lectureController = require('./controllers/lectureController')
let cartController = require('./controllers/cartController')

router.get('/', (req, res) => res.redirect('/lectures'))

//User related routes

router.get('/user', userController.userList)

router.get('/user/show/:iduser', userController.userShow)

router.get('/user/add', userController.userFormAdd)

router.post('/user/add', userController.userNew)

//Lecture related routes

router.get('/lectures', lectureController.lectureList)

router.get('/lectures/add', lectureController.lectureFormAdd)

router.post('/lectures/add', lectureController.lectureNew)

module.exports = router