import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthCredentialsDto } from './authCredentials.dto';
import { ProfileCredentialsDto } from './profileCredentials.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
    @Inject('PROFILE_SERVICE') private profileClient: ClientProxy,
  ) {}

  async signup(authCrendetialsDto: AuthCredentialsDto) {
    return await this.authClient.send({ cmd: 'signUp' }, authCrendetialsDto);
  }

  async signin(authCrendetialsDto: AuthCredentialsDto) {
    return await this.authClient.send({ cmd: 'signIn' }, authCrendetialsDto);
  }

  async createProfile(profilecredentialsDto: ProfileCredentialsDto) {
    return await this.profileClient.send(
      {
        cmd: 'createProfile',
      },
      profilecredentialsDto,
    );
  }

  async updateProfile(
    id: number,
    profilecredentialsDto: ProfileCredentialsDto,
  ) {
    return await this.profileClient.send(
      {
        cmd: 'updateProfile',
      },
      { id, profilecredentialsDto },
    );
  }
  async getProfileById(id: number) {
    return await this.profileClient.send({ cmd: 'getProfileById' }, id);
  }
}
