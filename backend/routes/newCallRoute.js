import express from 'express'
const router = express.Router()
import { getCallById, getCalls } from '../controlers/callControler.js'


router.route('/').get(getCalls)
router.route('/:id').get(getCallById)


export default router