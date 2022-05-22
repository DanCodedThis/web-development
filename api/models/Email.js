const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    googleMeet: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true}
);

module.exports = mongoose.model("Email", EmailSchema);