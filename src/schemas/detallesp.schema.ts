import * as mongoose from 'mongoose';

export const DetallepSchema = new mongoose.Schema({
    Mes: String,
    Sueldo: Number,
    Descuento: Number,
})