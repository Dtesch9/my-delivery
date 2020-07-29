import { Router } from 'express';

import DeliveriesRouter from '@modules/deliveries/infra/http/routes/deliveries.routes';

const routes = Router();

routes.use('/deliveries', DeliveriesRouter);

export default routes;
