import {Injectable, Logger, OnModuleInit} from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
    private readonly logger = new Logger(DatabaseService.name);

    constructor(private dataSource: DataSource) {}

    async onModuleInit() {
        try{
            if (!this.dataSource.isInitialized){
                await this.dataSource.initialize();
            }
            this.logger.log('✅ Database connected successfully.');
        }
        catch (error) {
            this.logger.error('❌ Database connection failed:', error);
            throw error; // Re-throw the error to prevent the application from starting
        }
    }
}