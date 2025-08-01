import { Body, Controller, Get } from '@nestjs/common';
// where you define routes and handle requests for the user module and services is where you define the business logic

@Controller('user') // Define the base route for user-related endpoints (e.g., /user)
export class UserController {
  @Get() // Define a GET endpoint for the user route
  getUser() {
    return { message: 'User endpoint reached' }; // Return a simple response
  }


   // for user registration, login, and other user-related operations, you would define additional methods here
   @Get("register")
    registerUser(@Body() body: any) {
    // Logic for user registration would go here
    return { message: 'User registration endpoint reached', data: body }; // Return a response
        
    }

    @Get("login")
    loginUser(@Body() body: any) {
      // Logic for user login would go here
      return { message: 'User login endpoint reached', data: body }; // Return a response
    }
}
