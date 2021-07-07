import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Empleados } from './empleados.interface';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    
    constructor(private readonly servicio: EmpleadosService){}

    
    @Get()
    ObtenerTodos():Promise<Empleados[]> {
        return this.servicio.todos();
    }

    @Get()
    ObtenerUno(@Param('id') id):Promise<Empleados[]> {
        return this.servicio.todos();
    }

    @Post()
    crear(@Body() body:Empleados):Promise<Empleados>{
        return this.servicio.crear(body);
    }

    @Put(':id')
    actualizar(@Param('id') id,@Body() empleado:Empleados):Promise<Empleados>{
        return this.servicio.update(id,empleado);
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Empleados>{
        return this.servicio.delete(id);
    }
}
