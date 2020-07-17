const Gradient = require('../models/Gradient');
const User = require('../models/User');

module.exports = {
    async createGradient(req, res) {
        try {
            const { title, description, price, color } = req.body;
            const { user_id } = req.headers;
            const { filename } = req.file;

            const user = await User.findById(user_id)

            if (!user) {
                return res.status(400).json({ message: 'User does not exist!' })
            }
            const gradient = await Gradient.create({
                title,
                description,
                color,
                price: parseFloat(price),
                user: user_id,
                thumbnail: filename
            })

            return res.json(gradient);
        }
        catch (error) {
            throw Error(`Error while Creating  new Gradient :  ${error}`)
        }
    },
    getGradientById: function (req, res) {
        const { gradientId } = req.params;
        Gradient.findById(gradientId)
            .then(gradient => res.json(gradient))
            .catch(err => res.status(422).json('Gradient Id does not exists'));
    },
    geAlltGradient: function (req, res) {
        Gradient.find(req.query)
            .then(gradient => res.json(gradient))
            .catch(err => res.status(422).json('We dont have anay gradient'));
    },

    async getGradient(req, res) {
        const { color } = req.params;
        const  query  = { color } || {}
        try {
            const gradients = await Gradient.find(query)
            if (gradients) {
                return res.json(gradients)
            }

        } catch (error) {
            throw Error(`We do not have any gradient :  ${error}`)
        }
    },
}
