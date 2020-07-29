import { Repository, getRepository } from 'typeorm';

import Delivery from '@modules/deliveries/infra/typeorm/entities/Delivery';
import IDeliveriesRepository from '../../../repositories/IDeliveriesRepository';
import CreateDeliveryDTO from '../../../dtos/CreateDeliveryDTO';

class DeliveriesRepository implements IDeliveriesRepository {
  private ormRepository: Repository<Delivery>;

  constructor() {
    this.ormRepository = getRepository(Delivery);
  }

  public async all(): Promise<Delivery[]> {
    return this.ormRepository.find();
  }

  public async create(data: CreateDeliveryDTO): Promise<Delivery> {
    const { client_name, delivery_date, start_point, end_point } = data;

    const delivery = this.ormRepository.create({
      client_name,
      delivery_date,
      start_point,
      end_point,
    });

    await this.ormRepository.save(delivery);

    return delivery;
  }
}

export default DeliveriesRepository;
