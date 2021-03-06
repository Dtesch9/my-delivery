import { inject, injectable } from 'tsyringe';

import IDeliveriesRepository from '../repositories/IDeliveriesRepository';
import Delivery from '../infra/typeorm/entities/Delivery';

@injectable()
class ListDeliveriesService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(): Promise<Delivery[]> {
    const deliveries = await this.deliveriesRepository.all();

    return deliveries;
  }
}

export default ListDeliveriesService;
