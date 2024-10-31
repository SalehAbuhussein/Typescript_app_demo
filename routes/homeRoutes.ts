import { Router } from 'express';
import * as homeController from '../controllers/home/homeController'

const router = Router();

router.get('/', homeController.getIndex);

module.exports = router;