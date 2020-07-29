import { injectable, inject } from 'tsyringe';
import { isBefore } from 'date-fns';

import AppError from '@shared/error/AppError';
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

    const currentDate = new Date(Date.now());

    const pastDate = isBefore(delivery_date, currentDate);

    if (pastDate) {
      throw new AppError('Deliveries on past dates are not allowed');
    }

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
