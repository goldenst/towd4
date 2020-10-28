import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getServices,
  getServiceById,
  createService,
} from '../controlers/servicesControler.js';

router.route('/').get(getServices);
router.route('/:id').get(getServiceById);
router.route('/new').post(createService);

export default router;
