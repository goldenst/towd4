import asyncHandler from 'express-async-handler';
import Pdr from '../models/PriorDamage.js';

// @Desc        Fetch AllPdrs
// @route       GET /api/v1/pdrs
// @access      Private
const getPdr = asyncHandler(async (req, res) => {
  const pdrs = await Pdr.find({});
  res.json(pdrs);
});

// @Desc        Fetch Single Pdr
// @route       GET /api/v1/pdrs/:id
// @access      Private
const getPdrById = asyncHandler(async (req, res) => {
  const pdr = await Pdr.findById(req.params.id);

  try {
    res.json(pdr);
  } catch (error) {
    res.status(404);
    throw new Error('Pdr Not Found ');
  }
});

// @Desc        CREATE a new Pdr
// @route       POST /api/v1/pdr/
// @access      Public
const createPdr =  asyncHandler(async (req, res ) => {
    const { callNumber, customerName, descriptionOfDamages, isActive, user } = req.body


    const pdr = await Pdr.create({
        callNumber,
        customerName,
        descriptionOfDamages,   
        isActive,
       
    })
    res.json(pdr)
     
})

// @Desc        UPDATE a  Pdr
// @route       PUT /api/v1/pdrs/:id
// @access      Private 
const updatePdr = asyncHandler(async (req, res) => {
    const { customerName, callNumber,  descriptionOfDamages, isActive } = req.body;
  
    const pdr = await Pdr.findById(req.params.id);
  
    if (pdr) {
        pdr.callNumber = callNumber
        pdr.customerName = customerName
       
        pdr.descriptionOfDamages = descriptionOfDamages
        pdr.isActive = isActive
  
      const updatedPdr = await pdr.save();
      res.json(updatedPdr);
    } else {
      res.status(400);
      throw new Error('pdr not Found');
    }
  });
  

export { getPdr, getPdrById, createPdr, updatePdr };