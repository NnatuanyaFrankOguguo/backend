import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

// The UserModule is responsible for encapsulating user-related functionality
// It imports the UserController and UserService, which handle user-related routes and business logic respectively

@Module({
  controllers: [UserController], // Register the UserController
  providers: [UserService], // Register the UserService
})

export class UserModule {}