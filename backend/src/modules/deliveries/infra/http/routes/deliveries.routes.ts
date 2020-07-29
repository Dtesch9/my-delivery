import { Router } from 'express';

import DeliveriesController from '../controllers/DeliveriesController';

const DeliveriesRouter = Router();
const deliveriesController = new DeliveriesController();

DeliveriesRouter.get('/', deliveriesController.index);

export default DeliveriesRouter;
