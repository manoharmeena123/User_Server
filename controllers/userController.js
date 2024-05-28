const { UserModal } = require('../models/userModel');

const userSignIn = async (req, res) => {
    try {
        const { address } = req.body;
        let user = await UserModal.findOne({ address });

        if (!user) {
            user = new UserModal({ address });
            await user.save();
        }

        res.status(200).json({ message: 'Sign-in successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const userLogin = async (req, res) => {
    try {
        const { address } = req.body;
        const user = await UserModal.findOne({ address });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add JWT token generation here if needed
        // const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { userSignIn, userLogin};
