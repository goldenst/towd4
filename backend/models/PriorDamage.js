import mongoose from 'mongoose';

const pdrSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    customerName: {
      type: String,
      required: true,
    },
    descriptionOfDamages: {
      type: String,
      required: true,
    },
    callNumber: {
      type: Number,
      default: 0,
      ref: 'Calls',
    },
    Pics: {
      type: String,
      default: 'Cash',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Pdr = mongoose.model('Pdr', pdrSchema);

export default Pdr;
