namespace RecuSegundoParcial{
 
    export class Cliente extends Persona
    {
        id:number;
        nombre:string;
        apellido:string;
        edad:number;
        sexo:number;
        
        constructor(id?: number, nombre?: string, apellido?: string, edad?: number, sexo?:number){
            
            super(id,nombre,apellido);
            this.edad = edad;
            this.sexo = sexo;
        }
    }
}