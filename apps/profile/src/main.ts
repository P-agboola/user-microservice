import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProfileModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4002,
      },
    },
  );

  await app.listen();
}
bootstrap();
