import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthCredentialsDto } from './authCredentials.dto';
import { ProfileCredentialsDto } from './profileCredentials.dto';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/signup')
  async signup(
    @Body() authCrendetialsDto: AuthCredentialsDto,
  ): Promise<Observable<any>> {
    return await this.appService.signup(authCrendetialsDto);
  }

  @Post('/signin')
  async signin(
    @Body() authCrendetialsDto: AuthCredentialsDto,
  ): Promise<Observable<any>> {
    return await this.appService.signin(authCrendetialsDto);
  }

  @Post('/profile')
  async createProfile(
    @Body() profileCredentialsDto: ProfileCredentialsDto,
  ): Promise<Observable<any>> {
    return await this.appService.createProfile(profileCredentialsDto);
  }

  @Get('/profile/:id')
  async getProfile(@Param('id') id: number): Promise<Observable<any>> {
    return await this.appService.getProfileById(id);
  }

  @Patch('/profile/:id')
  async updateProfile(
    @Param() id: number,
    @Body() profileCredentialsDto: ProfileCredentialsDto,
  ): Promise<Observable<any>> {
    return await this.appService.updateProfile(id, profileCredentialsDto);
  }
}
