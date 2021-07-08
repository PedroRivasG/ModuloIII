import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Documentacion
  const config = new DocumentBuilder()
    .setTitle('API FINAL DE MODULO 3')
    .setDescription('Esta es la api final del modulo 3')
    .setVersion('1.0.0')
    .addTag('Api Pagos')
    .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('docpagos',app,document);
  //Documentacion
  
  await app.listen(process.env.POR || 3000);
}
bootstrap();
