import mongoose from 'mongoose'

const callSchems = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique; true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },

}, {
    timestamps: true
})

const call = mongoose.model('Call', callSchems)

export default Call