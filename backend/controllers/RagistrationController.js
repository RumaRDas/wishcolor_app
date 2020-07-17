const Registration = require('../models/Registration')
const { createUser } = require('./UserController')

module.exports ={

    async create(req, res) {
        const { user_id } = req.headers;
        const { gradientid } = req.headers;
        const { date } = req.body;

        const registration = await Registration.create({
            user: user_id,
            gradient: gradientid,
            date
        })
        return res.json(registration);
    }

}