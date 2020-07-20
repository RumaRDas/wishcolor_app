const Gradient = require('../models/Gradient');
const User = require('../models/User');

module.exports = {
    //todo async
   async getGradientById(req, res) {
        const { gradientId } = req.params;
        try{

            const gradient = await  Gradient.findById(gradientId)
            if(gradient){
                return res.json(gradient)
            }

        }catch(error){
            return res.status(400).json({ message: 'Gradient  does not exist!' })

        }

    },

 geAlltGradient: function (req, res) {
    Gradient.find(req.query)
        .then(gradient => res.json(gradient))
        .catch(err => res.status(422).json('We dont have anay gradient'));
},

async getColortGradientbyUseuId(req, res) {
    const { user_id } = req.headers;
    try {
        const gradients = await Gradient.find({user: user_id})
        if (gradients) {
            return res.json(gradients)
        }

    } catch (error) {
       return res.status(422).json({message:'you dont have anay gradient'})
    }
},

    async getColortGradient(req, res) {
        const { color } = req.params;
        const query =color ? { color } : {}
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