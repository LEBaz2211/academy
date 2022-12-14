let User = require('../models/userModel')

let userList = []

exports.userList = (req, res) => {
	connection.query("select * from user", (err, result) => {
		if (err) console.log(err)
		res.render('userList.ejs', { users: result })
    })

exports.userFormAdd = (req, res) => {
	res.render('userAdd.ejs', { lastname: "", firstname: "" })
}

exports.userNew = (req, res) => {
	let firstname = req.body.firstname
	let lastname = req.body.lastname
	let newUser = new User(lastname, firstname)
	connection.query("INSERT INTO user set ?", newUser, (err, resultSQL) => {
		if (err) console.log(err)
	})
	res.redirect('/user')
}

exports.userShow = (req, res) => {
	let iduser = req.params.iduser
	res.render('userShow.ejs', { iduser : iduser , users : userList})
}