import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDeliveriesService from '@modules/deliveries/services/ListDeliveriesService';
import CreateDeliveryService from '@modules/deliveries/services/CreateDeliveryService';

class DeliveriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDeliveriesService = container.resolve(ListDeliveriesService);

    const deliveries = await listDeliveriesService.execute();

    return response.json(deliveries);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { client_name, delivery_date, start_point, end_point } = request.body;

    const createDeliveryService = container.resolve(CreateDeliveryService);

    const delivery = await createDeliveryService.execute({
      client_name,
      delivery_date,
      start_point,
      end_point,
    });

    return response.json(delivery);
  }
}

export default DeliveriesController;
