const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
    },
});
const UserModal = mongoose.model('User', userSchema);

module.exports = { UserModal };
