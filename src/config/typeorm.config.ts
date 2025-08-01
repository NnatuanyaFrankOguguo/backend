import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';


dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // This is often necessary for self-signed certificates( required foe NeonDB)
    },
    entities: [], // Add more entities as needed
    synchronize: true, // Set to false in production (use migrations in prod)
    autoLoadEntities: true, // Automatically load entities
    logging: true, // Enable query logging for debugging
};