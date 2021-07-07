import { ApiProperty } from "@nestjs/swagger";

export class EmpleadosDTO {
    
    readonly Nombre: string;
    readonly Apellidos: string;
    readonly Genero: string;
    readonly Edad: number;
    readonly telefono: number;
}