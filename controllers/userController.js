let User = require('../models/userModel')

let userList = []

exports.userList = function (req, res){
	res.render('userList.ejs', {users: userList})
}

exports.userFormAdd = function (req, res) {
	res.render('userAdd.ejs', { iduser: "-1", lastname: "", firstname: "" })
}

exports.userNew = function (req, res) {
	let iduser = req.body.iduser
	let firstname = req.body.firstname
	let lastname = req.body.lastname


	let user = new User(lastname, firstname)
	userList.push(user)
	res.redirect('/user')
}

exports.userShow = function (req, res) {
	let iduser = req.params.iduser
	res.render('userShow.ejs', { iduser : iduser , users : userList})
}