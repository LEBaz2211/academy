let express = require("express")

let router = express.Router()

router.get('/', (req, res) => {
    res.render('form.ejs')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('Hello' + req.body.name)
})

module.exports = router