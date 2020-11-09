import asyncHandler from 'express-async-handler';
import Calls from '../models/Calls.js';

// @Desc        Fetch All Calls
// @route       GET /api/v1/calls
// @access      Private
const getCalls = asyncHandler(async (req, res) => {
  const calls = await Calls.find({});
  res.json(calls);
});

// @Desc        Fetch Single Call
// @route       GET /api/v1/calls/:id
// @access      Private
const getCallById = asyncHandler(async (req, res) => {
  const call = await Calls.findById(req.params.id);

  try {
    res.json(call);
  } catch (error) {
    res.status(404);
    throw new Error('Product Not Found ');
  }
});

// @Desc        CREATE a new Call
// @route       POST /api/v1/calls/
// @access      Private
const createCall = asyncHandler(async (req, res) => {
  const {
    callOrPoNumber,
    invoiceNumber,
    requestedBy,
    callLogNumber,
    customerName,
    customerPhone,
    customerEmail,
    pickupLocation,
    serviceRequessted,
    reason,
    towDestination,
    vehYear,
    vehMake,
    vehModel,
    vehColor,
    vehVin,
    vehPlate,
    vehPlateState,
    vehOdom,
    vehUnitNumber,
  } = req.body;

  const call = await Calls.create({
    callOrPoNumber,
    invoiceNumber,
    requestedBy,
    callLogNumber,
    customerName,
    customerPhone,
    customerEmail,
    pickupLocation,
    serviceRequessted,
    reason,
    towDestination,
    vehYear,
    vehMake,
    vehModel,
    vehColor,
    vehVin,
    vehPlate,
    vehPlateState,
    vehOdom,
    vehUnitNumber,
  });

  res.status(201).json(call);
});

export { getCalls, getCallById, createCall };
