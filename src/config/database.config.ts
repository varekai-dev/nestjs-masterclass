import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  name: process.env.DATABASE_NAME || 'postgres',
  synchronize: Boolean(process.env.DATABASE_SYNC),
  autoLoadEntities: Boolean(process.env.DATABASE_AUTO_LOAD_ENTITIES),
}));
