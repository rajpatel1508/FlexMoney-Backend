const User = require('../models/user')

//Mock function for payment
const CompletePayment = (details) => {
    return true;
}

//Function to register new user
exports.register = (req, res) => {
    const { firstName, lastName, contactNumber, age, batch } = req.body;
    User.findOne({ contactNumber })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({ error });
            }
            if (user) {
                return res.status(400).json({
                    message: 'Mobile number already registered'
                })
            }
            if (CompletePayment(req.body)) {
                const user = new User({
                    firstName,
                    lastName,
                    contactNumber,
                    age,
                    batch
                });
                user.save((error, data) => {
                    if (data) {
                        return res.status(201).json({ data });
                    }
                    if (error) {
                        return res.status(400).json({
                            message: 'something went wrong'
                        })
                    }
                })
            } else {
                return res.status(400).json({
                    message: 'Payment unsuccessful'
                })
            }
        })
}