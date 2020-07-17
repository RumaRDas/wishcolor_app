
const User = require('../models/User')

module.exports = {
	async store(req, res) {
		try {
			const { email, firstName, lastName, password } = req.body;

			const existentUser = await User.findOne({ email });
			if (!existentUser) {
				const user = await User.create({
					firstName: firstName,
					lastName: lastName,
					password: password,
					email: email
				});
				return res.json(user);
			}

			return res.status(400).json({
				message: "email/user already exist! do you want to login?"
			})


		} catch (error) {
			throw Error(`Error while Registering new user :  ${error}`)
		}
	},
}