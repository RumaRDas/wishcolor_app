const Registration = require('../models/Registration');

module.exports = {

    async approve(req, res) {
        try {

            const { registration_id } = req.params;
            const registration = await Registration.findById(registration_id);
            registration.approve = true;
            await registration.save();
            return res.json(registration)

        } catch (error) {

            return res.status(400).json(error)
        }
    }
}