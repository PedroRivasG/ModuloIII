import * as mongoose from 'mongoose';

export const EmpleadoSchema = new mongoose.Schema({
    Nombre: {type: String, requiere:true},
    Apellidos: {type: String, requiere:true},
    Genero: {type: String, require:true},
    Edad: {type: Number, require:true},
    Telefono: {type: Number, requiere: true},
    PagosRecibidos: [{type: mongoose.Types.ObjectId}]
},
{
    versionKey: false,
    timestamps: true
}

);