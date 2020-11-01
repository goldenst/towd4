import mongoose from 'mongoose'

const callsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    callOrPoNumber: {
        type: String
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
    towDestination: {
        type: String
    },
    vehYear: {
        type: String 
    },
    vehMake: {
        type: String
    },
    vehModel: {
        type: String
    },
    vehColor: {
        type: String
    },
    vehVin: {
        type: String
    },
    vehPlate: {
        type: String
    },
    vehPlateState: {
        type: String
    },
    vehOdom: {
        type: String
    },
    vehUnitNumber: {
        type: String
    },
    driveable: {
        type: Boolean,
        default: false
    },
    havKeys: {
        type: Boolean,
        default: true
    },
    serviceDate: {
        type: Date
    },
    di: {
        type: Date
    },
    er: {
        type: Date
    },
    ol: {
        type: Date
    },
   cl: {
    type: Date
   },
   milesToVehicle: {
       type: Number
   },
   towMiles: {
       type: Number
   },
   total: {
       type: Number
   },
   isAudited: {
       type: Boolean,
       default: false
   },
   isPaid: {
       type: Boolean,
       default: false
   }

}, {
    timestamps: true
})

const Calls = mongoose.model('Calls', callsSchema)

export default Calls