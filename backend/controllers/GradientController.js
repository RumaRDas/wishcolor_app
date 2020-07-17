const Gradient = require('../models/Gradient');
const User = require('../models/User');

module.exports = {
    async createGradient(req, res) {
        try {
            const { title, description, price } = req.body;
            const { userId } = req.headers;
            const {filename} = req.file;

            const user = await User.findById(userId)

            if (!user) {
                return res.status(422).json({ message: 'User Id does not exists' })
            }

            const gradient = await Gradient.create({
                title,
                description,
                price,
                user: userId,
                thumbnail: filename
            })
            return res.json(gradient);
        } catch (error) {
            throw Error(`Error while Creating  new Gradient :  ${error}`)
        }
    }

}