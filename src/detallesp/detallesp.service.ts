import { Injectable } from '@nestjs/common';
import { Detallesp } from './detallesp.interface';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DetallespService {

  constructor(@InjectModel('Detallesp') private readonly detallespModel:Model<Detallesp>){}


  async todos():Promise<Detallesp[]> {

    return await this.detallespModel.find();

  }
 
  async uno(id:string):Promise<Detallesp> {

    return await this.detallespModel.findOne({_id:id});

  }
 
  async crear(detallep:Detallesp):Promise<Detallesp>{

    const nuevo= new this.detallespModel(detallep);
    return await nuevo.save();

  }

  async update(id:string, detallep:Detallesp):Promise<Detallesp>
  {
    return await this.detallespModel.findByIdAndUpdate(id,detallep,{new:true});
  }
   
  async delete(id:string):Promise<Detallesp>
  {
    return await this.detallespModel.findByIdAndRemove(id);
  }
  
}
