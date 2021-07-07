import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DetallespModule } from './detallesp/detallesp.module';

@Module({
  imports: [EmpleadosModule,DetallespModule, MongooseModule.forRoot('mongodb+srv://Pedro:76FnPFEJyvYRrclA@api-pagos.ray74.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
