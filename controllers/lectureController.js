let Lecture = require('../models/lectureModel')

let lectureList = []

exports.lectureList = (req, res) => {
    res.render('lectureList.ejs', { lectureList : lectureList})
}

exports.lectureNew = (req, res) => {
    let lecture = new Lecture(req.body.name, req.body.price, req.body.startDate, req.body.endDate)
    lectureList.push(lecture)
    res.redirect('/lectures')
}

exports.lectureFormAdd = (req, res) => {
    res.render('lectureFormAdd.ejs', { name: "", price: "", startDate: "", endDate: "" })
}