import mongoose from 'mongoose'

const callsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    invoiveNumber: {
        type: String
    },
    requestedBy: {
        type: String,
        required: true
    },
    callLogNumber: {
        type: String
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String
    },
    customerEmail: {
        type: String
    },
    pickupLocation: {
        type: String
    },
    serviceRequessted: {
        type: String
    },
    reason: {
        type: String
    },
   


}, {
    timestamps: true
})

const Calls = mongoose.model('Calls', callsSchema)

export default Calls