import { Module } from '@nestjs/common';
import { DetallespService } from './detallesp.service';
import { DetallespController } from './detallesp.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DetallepSchema } from 'src/schemas/detallesp.schema';



@Module({
  imports:[MongooseModule.forFeature([{name:'Detallesp',schema:DetallepSchema}])],
  providers: [DetallespService],
  controllers: [DetallespController],
})
export class DetallespModule {}
