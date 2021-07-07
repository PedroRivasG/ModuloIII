import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadoSchema } from 'src/schemas/empleados.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:'Empleados',schema:EmpleadoSchema}])],
    providers: [EmpleadosService],
    controllers: [EmpleadosController],
})
export class EmpleadosModule {}