let Lecture = require('../models/lectureModel')
let connection = require('../dataBase.js')

exports.lectureList = (req, res) => {
    connection.query("select * from lecture", (err, result) => {
        if (err) console.log(err)
        res.render('lectureList.ejs', { lectures: result })
    })
}

exports.lectureNew = (req, res) => {
    let newLecture = new Lecture(req.body.name, req.body.price, req.body.startDate, req.body.endDate)
    connection.query("INSERT INTO lecture set ?", newLecture, (err, resultSQL) => {
        if (err) console.log(err)
    })
    res.redirect('/lectures')
}

exports.lectureFormAdd = (req, res) => {
    
    res.render('lectureFormAdd.ejs', { name: "", price: "", startDate: "", endDate: "" })
}

exports.lectureAddToCart = (req, res) => {
    let idlecture = req.params.idlecture
    let cart = new Cart()
    cart.addLecture(lectureList[idlecture])
    res.redirect('/lectures')
}