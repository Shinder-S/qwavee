import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Product ware house')
  .setDescription('The product API description, create, update and delete')
  .setVersion('1.0')
  .addServer('http://localhost:3000')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
