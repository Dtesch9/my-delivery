import AppError from '@shared/error/AppError';

import FakeDeliveriesRepository from '../repositories/fakes/FakeDeliveriesRepository';
import CreateDeliveryService from './CreateDeliveryService';

let fakeDeliveriesRepository: FakeDeliveriesRepository;

let createDeliveryService: CreateDeliveryService;

describe('CreateDeliveryService', () => {
  beforeEach(() => {
    fakeDeliveriesRepository = new FakeDeliveriesRepository();

    createDeliveryService = new CreateDeliveryService(fakeDeliveriesRepository);

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 8, 29).getTime();
    });
  });

  it('should be able create delivery', async () => {
    const delivery = await createDeliveryService.execute({
      client_name: 'fake-name-1',
      delivery_date: new Date(2020, 10, 12),
      start_point: [-22.531344, -43.1847469],
      end_point: [-22.514907, -43.1771937],
    });

    expect(delivery).toEqual(expect.objectContaining(delivery));
  });

  it('should not be able to create delivery if delivery_date before current date', async () => {
    await expect(
      createDeliveryService.execute({
        client_name: 'fake-name-1',
        delivery_date: new Date(2020, 8, 28),
        start_point: [-22.531344, -43.1847469],
        end_point: [-22.514907, -43.1771937],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
