 import express from 'express'
const router = express.Router()
import {getPdr, getPdrById, createPdr, updatePdr } from '../controlers/pdrController.js'


 router.route('/').get(getPdr).post(createPdr)
 router.route('/:id').get(getPdrById).put(updatePdr)


export default router