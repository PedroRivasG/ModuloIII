import * as mongoose from 'mongoose';

export const DetallepSchema = new mongoose.Schema({
    Mes: {type: String, require:true},
    Sueldo: {type: Number, requiere: true},
    Descuento: {type: Number, requiere: true},
})