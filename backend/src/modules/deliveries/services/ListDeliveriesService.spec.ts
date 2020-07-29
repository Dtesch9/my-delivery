import FakeDeliveriesRepository from '../repositories/fakes/FakeDeliveriesRepository';
import ListDeliveriesService from './ListDeliveriesService';

let fakeDeliveriesRepository: FakeDeliveriesRepository;

let listDeliveriesService: ListDeliveriesService;

describe('ListDeliveriesService', () => {
  beforeEach(() => {
    fakeDeliveriesRepository = new FakeDeliveriesRepository();

    listDeliveriesService = new ListDeliveriesService(fakeDeliveriesRepository);

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 8, 29).getTime();
    });
  });

  it('should be able to list deliveries', async () => {
    const deliveryOne = await fakeDeliveriesRepository.create({
      client_name: 'fake-name-1',
      delivery_date: new Date(2020, 10, 12),
      start_point: [-22.531344, -43.1847469],
      end_point: [-22.514907, -43.1771937],
    });

    const deliveryTwo = await fakeDeliveriesRepository.create({
      client_name: 'fake-name-2',
      delivery_date: new Date(2020, 10, 13),
      start_point: [-22.531344, -43.1847469],
      end_point: [-22.514907, -43.1771937],
    });

    const deliveries = await listDeliveriesService.execute();

    expect(deliveries).toHaveLength(2);
    expect(deliveries[0]).toEqual(expect.objectContaining(deliveryOne));
    expect(deliveries[1]).toEqual(expect.objectContaining(deliveryTwo));
  });
});
