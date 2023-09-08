import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const whiteList = ['http://localhost:3000', 'http://localhost:8800'];
  app.enableCors({
    origin: whiteList,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.setGlobalPrefix('api');

  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
