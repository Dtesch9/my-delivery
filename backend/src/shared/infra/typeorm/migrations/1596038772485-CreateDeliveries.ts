import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDeliveries1596038772485
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'deliveries',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'client_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'delivery_date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'start_point',
            type: 'decimal[]',
            isNullable: false,
          },
          {
            name: 'end_point',
            type: 'decimal[]',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('deliveries');
  }
}
