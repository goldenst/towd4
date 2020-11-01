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
  const call = new Call({
    name: 'Sample Name',
    catagory: 'Sample Service',
    price: 0,
    description: 'Sample Desc',
  });

  const createdCall = await call.save();
  res.status(201).json(createCall);
});

export { getCalls, getCallById, createCall };
