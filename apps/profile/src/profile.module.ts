import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.db_host,
      port: parseInt(process.env.db_port),
      username: process.env.db_username,
      password: process.env.db_password || 'My-password@123',
      database: process.env.db_database,
      entities: [Profile],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Profile]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
