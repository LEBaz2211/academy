import User from '../models/userModel'

let userList = []

exports.userList = function (req, res){
	let user = new User("Mannaerts","Basil")
	userList.push(user)
	res.render('userList.ejs', {users: userList})
}