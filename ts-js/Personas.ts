namespace RecuSegundoParcial
{
    export class Persona
    {
        id:number;
        nombre:string;
        apellido:string;
        constructor(id?: number, nombre?: string, apellido?: string)
        {
            this.id=id;
            this.apellido=apellido;
            this.nombre=nombre;
        }
    }
}