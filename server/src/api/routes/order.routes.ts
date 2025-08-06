// Shop.Project/server/src/api/routes/order.routes.ts
import { Router } from 'express';
import { createOrder } from '../controllers/order.controller';

const router = Router();

router.post('/', createOrder);

export default router;