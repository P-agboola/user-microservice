import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
  });
  await app.startAllMicroservices();
  await app.listen(3030, () => console.log('client is running on 3030'));
}
bootstrap();
