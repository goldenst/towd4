import asyncHandler from 'express-async-handler';
import Services from '../models/Services.js';

// @Desc        Fetch All Services
// @route       GET /api/v1/services
// @access      Private
const getServices = asyncHandler(async (req, res) => {
  const services = await Services.find({});
  res.json(services);
});

// @Desc        Fetch Single service
// @route       GET /api/v1/services/:id
// @access      Private
const getServiceById = asyncHandler(async (req, res) => {
  const service = await Services.findById(req.params.id);

  try {
    res.json(service);
  } catch (error) {
    res.status(404);
    throw new Error('Service Not Found ');
  }
});

// @Desc        CREATE a new Service
// @route       POST /api/v1/services/
// @access      Private / ADMIN
const createService = asyncHandler(async (req, res) => {
  const service = new Services({
    name: 'Sample Name',
    catagory: 'Sample Service',
    price: 0,
    description: 'Sample Desc',
  });

  const createdService = await service.save();
  res.status(201).json(createService);

});

// @Desc        UPDATE a  Service
// @route       PUT /api/v1/services/:id
// @access      Private / ADMIN
const updateService = asyncHandler(async (req, res) => {
  const { name, price, catagory, description, isActive } = req.body;

  const service = await Services.findById(req.params.id);

  if (service) {
      service.name = name
      service.price = price
      service.catagory = catagory
      service.description = description
      service.isActive = isActive

    const updatedService = await service.save();
    res.json(updatedService);
  } else {
    res.status(400);
    throw new Error('Service not Found');
  }
});

// @Desc        DELETE Single service
// @route       DELETE /api/v1/services/:id
// @access      Private / ADMIN
const deleteService = asyncHandler(async (req, res) => {
  const service = await Services.findById(req.params.id);

  if (service) {
    await service.remove();
    res.json({ message: 'Service Removed' });
  } else {
    res.status(404);
    throw new Error('Service not Found');
  }
});

export { getServices, getServiceById, createService, deleteService, updateService };
