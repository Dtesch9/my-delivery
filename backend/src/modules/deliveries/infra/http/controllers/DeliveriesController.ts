import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDeliveriesService from '@modules/deliveries/services/ListDeliveriesService';

class DeliveriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDeliveriesService = container.resolve(ListDeliveriesService);

    const deliveries = await listDeliveriesService.execute();

    return response.json(deliveries);
  }
}

export default DeliveriesController;
