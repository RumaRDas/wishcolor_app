const Registration = require('../models/Registration')

module.exports ={

    async create(req, res) {
        const { user_id } = req.headers;
        const { gradientId } = req.params;
        const { date } = req.body;

        const registration = await Registration.create({
            user: user_id,
            gradient: gradientId,
            date
        })
        await registration
        .populate(`user`)
        .populate(`gradient`)
        .execPopulate();

        return res.json(registration);
    }

}