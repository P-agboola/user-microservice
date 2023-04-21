import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthCredentialsDto } from './authCredentials.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'signUp' })
  async signUp(@Payload() authCredentialsDto: AuthCredentialsDto) {
    return await this.authService.signUp(authCredentialsDto);
  }

  @MessagePattern({ cmd: 'signIn' })
  async signIn(authCredentialsDto: AuthCredentialsDto) {
  return await this.authService.signIn(authCredentialsDto);
  }
}
