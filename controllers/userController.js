let connection = require('../dataBase.js')
let User = require('../models/userModel')

let cart = []

exports.userFormLogin = (req, res) => {
	res.render('userLogin.ejs', { name: ""})
}

exports.userLogin = (req, res) => {
	connection.query("select * from user", (err, result) => {
		if (err) console.log(err)
		result.forEach((user) => {
			if (user.name == req.body.name) {
				if (req.session.end) {
					req.session.user = req.body.name
					req.session.logged = true
					req.session.newuser = false
					console.log(req.session)
					res.redirect('/cart/finish')
				}
				else {
					req.session.user = req.body.name
					req.session.logged = true
					req.session.newuser = false
					console.log(req.session)
					res.redirect('/lectures/')
				}
			}
			
		})
		
        if (req.session.newuser == true) {
			if (req.session.end) {
				req.session.user = req.body.name
				req.session.logged = true
				req.session.newuser = true
				res.redirect('/cart/finish')
			}
			else {
				req.session.user = req.body.name
				req.session.logged = true
				req.session.newuser = true
				console.log(req.session)
				res.redirect('/lectures/')
			}
		}
		
	})
}

/*exports.userLectures = (req, res) = {
	if(req.session.logged) {
		connection.query("select * from lecture", (err, result) => {
			
*/

exports.userLectureRegister = (req, res) => {
	cart.push(req.params.idlecture)
	res.redirect('/lectures')
}

exports.userCart = (req, res) => {
	let lectureList = []
	connection.query("select * from lecture", (err, result) => {
		if (err) console.log(err)
		result.forEach(lecture => {
			cart.forEach(id => {
				id = parseInt(id)
				if (lecture.idlecture == id) {
					lectureList.push(lecture)
				}
			})
		res.render('cart.ejs', { lectures: lectureList })
		})
	})
}



exports.userCartFinish = (req, res) => {
	if (req.session.logged) {
		if (req.session.newuser) {
			let newUser = new User(req.session.user, 0, 0, 0)
			cart.forEach(lecture => {
				if (lecture == 1) newUser.lecture1 = 1
				else if (lecture == 2) newUser.lecture2 = 1
				else if (lecture == 3) newUser.lecture3 = 1
			})
			connection.query("INSERT INTO user set ?", newUser, (err, resultSQL) => {
				if (err) console.log(err)
				res.redirect('/cart/thanks')
			})
		}
		else {
            user = new User(req.session.user, 0, 0, 0)
			cart.forEach(lecture => {
				if (lecture == 1) user.lecture1 = 1
				else if (lecture == 2) user.lecture2 = 1
				else if (lecture == 3) user.lecture3 = 1
			})
			connection.query("UPDATE user SET ? WHERE iduser = ?", [user, user.iduser], (err, resultSQL) => {
				if (err) console.log(err)
				res.redirect('/cart/thanks')
			})
		}
    }
	else {
		req.session.end = true
		res.redirect('/login')
	}
}

	

exports.userCartThanks = (req, res) => {
    res.render('cartThanks.ejs')
}
