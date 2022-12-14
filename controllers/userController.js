let connection = require('../dataBase.js')

let cart = []

exports.userFormLogin = (req, res) => {
	res.render('userLogin.ejs', { name: ""})
}

exports.userLogin = (req, res) => {
	connection.query("select * from user", (err, result) => {
		if (err) console.log(err)
		result.forEach(user => {
			if (user.name == req.body.name) {
				req.session.user = req.body.name
				req.session.logged = true
				req.session.newuser = false
				console.log(req.session)
				res.redirect('/user/lectures/')
			}
			else {
				req.session.user = req.body.name
				req.session.logged = true
				req.session.newuser = true
				console.log(req.session)
				res.redirect('/lectures')
			}
		})
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
				if (lecture.idlecture == id) {
					lectureList.push(lecture)
				}
			})
		})
	})
    res.render('cart.ejs', { lectures: lectureList })
}