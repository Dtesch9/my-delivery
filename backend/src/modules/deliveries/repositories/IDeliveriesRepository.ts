import Delivery from '@modules/deliveries/infra/typeorm/entities/Delivery';
import CreateDeliveryDTO from '@modules/deliveries/dtos/CreateDeliveryDTO';

export default interface ICallTexsRepository {
  all(): Promise<Delivery[]>;
  create(data: CreateDeliveryDTO): Promise<Delivery>;
}
