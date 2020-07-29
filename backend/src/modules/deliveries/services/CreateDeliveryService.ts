import { injectable, inject } from 'tsyringe';

import IDeliveryRepository from '../repositories/IDeliveriesRepository';
import Delivery from '../infra/typeorm/entities/Delivery';

interface IResquest {
  client_name: string;
  delivery_date: Date;
  start_point: number[];
  end_point: number[];
}

@injectable()
class CreateDeliveryService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveryRepository,
  ) {}

  public async execute(data: IResquest): Promise<Delivery> {
    const { client_name, delivery_date, start_point, end_point } = data;

    const delivery = await this.deliveriesRepository.create({
      client_name,
      delivery_date,
      start_point,
      end_point,
    });

    return delivery;
  }
}

export default CreateDeliveryService;
