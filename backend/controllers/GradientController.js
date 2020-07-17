const Gradient = require('../models/Gradient');
const User = require('../models/User');

module.exports = {
    async createGradient(req, res) {
        try{
        const { title, description, price } = req.body;
        const { user_id } = req.headers;
        const { filename } = req.file;

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ message: 'User does not exist!' })
        }
        const gradient = await Gradient.create({
            title,
            description,
            price:parseFloat(price),
            user: user_id,
            thumbnail: filename
        })

        return res.json(gradient);
    }
    catch (error) {
        throw Error(`Error while Registering new user :  ${error}`)
    }
    }
     
}
