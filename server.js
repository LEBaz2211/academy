let express = require("express")
let session = require('express-session')

let app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static('public'))

session.logged = false

session.newuser = true

session.end = false

console.log(session)

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

let router = require('./routes.js')
app.use('/', router)

/*app.get('/', (req, res) => {
    res.render('index.ejs')
})*/

app.listen(80, () => {
    console.log('Server is running on port 80')
})

module.exports = session