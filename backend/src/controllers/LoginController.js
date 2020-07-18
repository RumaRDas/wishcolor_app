const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(200).json({ message: "Required field missing" })
            }
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(200).json({ message: "User not Found, Do you want to Register ?" })
            }
            if (user && await bcrypt.compare(password, user.password)) {
                const userResponse = {
                    _id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
                return res.json(userResponse);
            }
            else {
                return res.status(200).json({ message: "User field does not match" })
            }
        }
        catch (error) {
            return res.status(400).json({ message: "Error to log in" })

        }
    }

}