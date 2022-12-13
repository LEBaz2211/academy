let express = require("express")

let router = express.Router()

let userController = require('./controllers/userController')

router.get('/', (req, res) => res.redirect('/user'))

router.get('/user', userController.userList)

router.get('/user/show/:iduser', userController.userShow)

router.get('/user/add', userController.userFormAdd)

router.post('/user/add', userController.userNew)




module.exports = router