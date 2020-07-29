import { uuid } from 'uuidv4';

import Delivery from '../../infra/typeorm/entities/Delivery';
import CreateDeliveryDTO from '../../dtos/CreateDeliveryDTO';

class FakeDeliveriesRepository {
  private deliveries: Delivery[];

  constructor() {
    this.deliveries = [];
  }

  public async all(): Promise<Delivery[]> {
    return this.deliveries;
  }

  public async create(data: CreateDeliveryDTO): Promise<Delivery> {
    const { client_name, delivery_date, start_point, end_point } = data;

    const delivery = new Delivery();

    Object.assign(delivery, {
      id: uuid(),
      client_name,
      delivery_date,
      start_point,
      end_point,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });

    this.deliveries.push(delivery);

    return delivery;
  }
}

export default FakeDeliveriesRepository;
