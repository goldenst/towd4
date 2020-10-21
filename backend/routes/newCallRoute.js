import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()

import Call from '../models/Calls.js'




router.get('/', asyncHandler( async  (req, res) => {
  const calls = await Call.find({})

  res.json(calls)
}))


router.get('/:id', asyncHandler ( async (req, res) => {
  const call = await Call.findById(req.params.id)

  try {
  res.json(call)
    
  } catch (error) {
    res.status(404)
    throw new Error('Product Not Found ')
  }

}))

export default router