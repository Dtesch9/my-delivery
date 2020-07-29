import { container } from 'tsyringe';

import DeliveriesRepository from '@modules/deliveries/infra/typeorm/repositories/DeliveriesRepository';

import IDeliveriesRepository from '@modules/deliveries/repositories/IDeliveriesRepository';

container.registerSingleton<IDeliveriesRepository>(
  'DeliveriesRepository',
  DeliveriesRepository,
);
