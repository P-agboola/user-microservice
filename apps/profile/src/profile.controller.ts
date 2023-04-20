import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProfileCredentialsDto } from './profileCredentials.dto';
import { Profile } from './profile.entity';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern({ cmd: 'createProfile' })
  async createProfile(
    @Payload() profileCredentialsDto: ProfileCredentialsDto,
  ): Promise<Profile> {
    return await this.profileService.createProfile(profileCredentialsDto);
  }

  @MessagePattern({ cmd: 'getProfileById' })
  async getProfileById(id: number): Promise<Profile> {
    return await this.profileService.getProfileById(id);
  }

  @MessagePattern({ cmd: 'UpdateProfile' })
  async updateProfile(
    id: number,
    profileCredentialsDto: ProfileCredentialsDto,
  ): Promise<Profile> {
    return await this.profileService.updateProfile(id, profileCredentialsDto);
  }
}
