import mongoose from 'mongoose'

const callsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    requestedBy: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true,  
    },


}, {
    timestamps: true
})

const Calls = mongoose.model('Calls', callsSchema)

export default Calls