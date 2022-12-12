let express = require("express")

let app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

let routes = require('./mysroutes.js')
app.use('/', routes)

/*app.get('/', (req, res) => {
    res.render('index.ejs')
})*/

app.listen(80, () => {
    console.log('Server is running on port 80')
})