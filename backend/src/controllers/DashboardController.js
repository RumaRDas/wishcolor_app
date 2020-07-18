const Gradient = require('../models/Gradient');
const User = require('../models/User');

module.exports = {
    //todo async
    getGradientById: function (req, res) {
        const { gradientId } = req.params;
        Gradient.findById(gradientId)
            .then(gradient => res.json(gradient))
            .catch(err => res.status(422).json('Gradient Id does not exists'));
    },
    //todo async
    geAlltGradient: function (req, res) {
        Gradient.find(req.query)
            .then(gradient => res.json(gradient))
            .catch(err => res.status(422).json('We dont have anay gradient'));
    },

    async getGradient(req, res) {
        const { color } = req.params;
        const query = { color } || {}
        try {
            const gradients = await Gradient.find(query)
            if (gradients) {
                return res.json(gradients)
            }

        } catch (error) {
            throw Error(`We do not have any gradient of that color :  ${error}`)
        }
    }

}