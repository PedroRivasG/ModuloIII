import * as mongoose from 'mongoose';

export const EmpleadoSchema = new mongoose.Schema({
    Nombre: String,
    Apellidos: String,
    Genero: String,
    Edad: Number,
    Telefono: Number,
})