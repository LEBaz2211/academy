let express = require("express")

let router = express.Router()

let userController = require('../controllers/userController')

router.get('/user', userController.userList)

/*router.get('/user', (req, res) => {
    res.render('userCon.ejs')
})
*/
/*router.post('/', (req, res) => {
    console.log(req.body)
    res.send('Hello ' + req.body.name)
})*/

module.exports = router