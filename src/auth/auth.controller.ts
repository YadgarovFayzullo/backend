import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';
import { Public } from './utils';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login') 
  signIn(@Body() authData: Record<string, string>) {
    return this.authService.signIn(authData.username, authData.password);
  }
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  signUp(@Body() authData: User) {
    return this.authService.signUp(authData);
  }
}
