import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getServices,
  getServiceById,
  createService,
  deleteService,
  updateService,
} from '../controlers/servicesControler.js';

router.route('/').get(getServices).post(protect, admin, createService);
router
  .route('/:id')
  .get(getServiceById)
  .delete(protect, admin, deleteService)
  .put( updateService);

export default router;
