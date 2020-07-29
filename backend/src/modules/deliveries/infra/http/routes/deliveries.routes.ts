import { Router } from 'express';

import DeliveriesController from '../controllers/DeliveriesController';
import storeRouteValidation from '../validations/deliveriesRoute';

const DeliveriesRouter = Router();
const deliveriesController = new DeliveriesController();

DeliveriesRouter.get('/', deliveriesController.index);
DeliveriesRouter.post('/', storeRouteValidation, deliveriesController.store);

export default DeliveriesRouter;
