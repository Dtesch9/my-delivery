import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

type Coors = [number, number];

@Entity('deliveries')
class Delivery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_name: string;

  @Column()
  delivery_date: Date;

  @Column('decimal', { array: true })
  start_point: Coors;

  @Column('decimal', { array: true })
  end_point: Coors;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Delivery;
