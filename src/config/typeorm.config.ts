import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '895623147147Ss@',
  database: 'task management',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true, // false for prod
};
