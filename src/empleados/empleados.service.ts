import { Injectable } from '@nestjs/common';
import { Empleados } from './empleados.interface';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmpleadosService {
    
    constructor(@InjectModel('Empleados') private readonly empleadoModel:Model<Empleados>){}
    
    async todos():Promise<Empleados[]>{
        return await this.empleadoModel.find();
    }

    async uno(id:string):Promise<Empleados>{
        return await this.empleadoModel.findOne({_id:id});
    }

    async crear(empleado:Empleados):Promise<Empleados>{
        const nuevo = new this.empleadoModel(empleado);
        return await nuevo.save();
    }

    async update(id:string, empleado:Empleados):Promise<Empleados>{
        return await this.empleadoModel.findByIdAndUpdate(id,empleado,{new:true});
    }

    async delete(id:string):Promise<Empleados>{
        return await this.empleadoModel.findByIdAndRemove(id);
    }
}
