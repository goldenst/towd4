import mongoose from 'mongoose'

const servicesSchema = mongoose.Schema({
   
   name: {
       type: String,
       required: true
   },
   description: {
       type: String,
       required: true
   },
   price: {
       type: Number,
       default: 0
   },
   catagory: {
      type: String,
      default:  'Cash'
   },
   isActive: {
       type: Boolean,
       default: false
   }


}, {
    timestamps: true
})

const Services = mongoose.model('Services', servicesSchema)

export default Services