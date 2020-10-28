import asyncHandler from 'express-async-handler'
import Services from '../models/Services.js'


// @Desc        Fetch All Services
// @route       GET /api/v1/services
// @access      Private
const getServices =  asyncHandler(async (req, res ) => {
    const services = await Services.find({})
    res.json(services)
})


// @Desc        Fetch Single service
// @route       GET /api/v1/services/:id
// @access      Private
const getServiceById = asyncHandler(async (req, res ) => {
    const service = await Services.findById(req.params.id)

    try {
    res.json(service)
      
    } catch (error) {
      res.status(404)
      throw new Error('Service Not Found ')
    }
})

// @Desc        CREATE a new Service
// @route       POST /api/v1/user/
// @access      Private
const createService =  asyncHandler(async (req, res ) => {
    const { name, description, price, catagory, isActive} = req.body

    const serviceExists = await Services.findOne({ name })

    if (serviceExists) {
        res.status(400)
        throw new Error('Service Already Exists')
    }

    const services = await Services.create({
        name,
        description,
        price,
        catagory,
        isActive
    })

    if (services) {
        res.status(201).json({
            _id: services._id,
            name: services.name,
            description: services.description,
            price: services.price,
            catagory: services.catagory,
            isActive: services.isActive
            
        })
    } else {
        res.status(400)
        throw new Error('Invalid service Data')
    }
     
})


export { getServices, getServiceById, createService }
