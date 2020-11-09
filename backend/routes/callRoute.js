import express from 'express'
const router = express.Router()
import { getCallById, getCalls, createCall } from '../controlers/callControler.js'


router.route('/').get(getCalls).post(createCall)
router.route('/:id').get(getCallById)


export default router