namespace RecuSegundoParcial{
    var listaPersonas:any = new Array;

    window.addEventListener("load", () =>{
        // (<HTMLInputElement>document.getElementById("idId")).value = String(idMayor());
        CargarTabla(listaPersonas);
        let btnGuardar =document.getElementById("btnGuardar");
        btnGuardar.addEventListener("click",AgregarCliente);
        let slcFiltro =document.getElementById("slcFiltro");
        slcFiltro.addEventListener("change",Filtrar);
        let btnPromedio =document.getElementById("btnPromedio");
        btnPromedio.addEventListener("click",Promedio);
        let btnEliminar =document.getElementById("btnEliminar");
        btnEliminar.addEventListener("click",Eliminar);
        let btnLimpiarTabla =document.getElementById("btnLimpiarTabla");
        btnLimpiarTabla.addEventListener("click",LimpiarLista);
        //let btnLimpiarDatos =document.getElementById("btnLimpiarDatos");
        //btnLimpiarDatos.addEventListener("click",LimpiarContenedor);


        
        document.getElementById("checkId").addEventListener("click",FiltroId);
        document.getElementById("checkNombre").addEventListener("click",FiltroNombre);
        document.getElementById("checkApellido").addEventListener("click",FiltroApellido);
        document.getElementById("checkEdad").addEventListener("click",FiltroEdad);
        document.getElementById("checkSexo").addEventListener("click",FiltroSexo);
    });

    export function idMayor(){
        var retorno:number;
        if(listaPersonas.length < 1){
            retorno = 0;
        }else{
            var listaPersonasAux = listaPersonas
            retorno = listaPersonasAux.reduce((total, cliente)=>{
               if(cliente.id >= total){
                return cliente.id;
                }
                return total;
            },0);
        }
    
        return retorno + 1;
    }

    export function FiltroId(){

        if(document.getElementById("idTable").hidden == false){

            document.getElementById("idTable").hidden = true;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("id"+dato.id)).hidden = true;
                
            });
        }else if(document.getElementById("idTable").hidden == true){
            document.getElementById("idTable").hidden = false;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("id"+dato.id)).hidden = false;
                
            });
        }
    }
    
    
    export function FiltroNombre(){
        if(document.getElementById("nombreTable").hidden == false){
    
            document.getElementById("nombreTable").hidden = true;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("nombre"+dato.id)).hidden = true;
                
            });
        }else if(document.getElementById("nombreTable").hidden == true){
            document.getElementById("nombreTable").hidden = false;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("nombre"+dato.id)).hidden = false;
                
            });
        }
        
    }
    export function FiltroApellido(){
        if(document.getElementById("apellidoTable").hidden == false){
    
            document.getElementById("apellidoTable").hidden = true;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("apellido"+dato.id)).hidden = true;
                
            });
        }else if(document.getElementById("apellidoTable").hidden == true){
            document.getElementById("apellidoTable").hidden = false;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("apellido"+dato.id)).hidden = false;
                
            });
        }
    }
    export function FiltroEdad(){
        if(document.getElementById("edadTable").hidden == false){
    
            document.getElementById("edadTable").hidden = true;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("edad"+dato.id)).hidden = true;
                
            });
        }else if(document.getElementById("edadTable").hidden == true){
            document.getElementById("edadTable").hidden = false;
            listaPersonas.map(function(dato){
                (<HTMLInputElement>document.getElementById("edad"+dato.id)).hidden = false;
                
            });
        }
    }
    export function FiltroSexo(){
                if(document.getElementById("sexoTable").hidden == false){
            
                    document.getElementById("sexoTable").hidden = true;
                    listaPersonas.map(function(dato){
                        (<HTMLInputElement>document.getElementById("sexo"+dato.id)).hidden = true;
                        
                    });
                }else if(document.getElementById("sexoTable").hidden == true){
                    document.getElementById("sexoTable").hidden = false;
                    listaPersonas.map(function(dato){
                        (<HTMLInputElement>document.getElementById("sexo"+dato.id)).hidden = false;
                        
                    });
                }

    }

    export function AgregarCliente(){
        var id = idMayor();
        let nombre = (<HTMLInputElement>document.getElementById("txtNombre")).value;
        let apellido = (<HTMLInputElement>document.getElementById("txtApellido")).value;
        let edad = Number((<HTMLInputElement>document.getElementById("txtEdad")).value);
        let sexo = (<HTMLInputElement>document.getElementById("slcSexo")).value;
        var sexoAux:number;
        
        var flag = true;
        
        console.log("esfsd");
        if(nombre.length < 1){
            (<HTMLInputElement>document.getElementById("txtNombre")).className = "inputError";
            flag = false;
        }else{
            (<HTMLInputElement>document.getElementById("txtNombre")).className = "inputSinError";
        }
        
        if(apellido.length < 1){
            (<HTMLInputElement>document.getElementById("txtApellido")).className = "inputError";
            flag = false;
        }else{
            (<HTMLInputElement>document.getElementById("txtApellido")).className = "inputSinError";
        }
       
        if(isNaN(edad) || edad < 1 ){
            (<HTMLInputElement>document.getElementById("txtEdad")).className = "inputError";
            flag = false;
        }else{
            (<HTMLInputElement>document.getElementById("txtEdad")).className = "inputSinError";
        }

        if(flag == true){

            switch (sexo){
                case "masculino":
                    sexoAux = 1;
                    break;
                case "femenino":
                    sexoAux = 2;
                    break;        
                default:
                    console.log("Error");
                    break;                
            }
                        
            console.log("Nuevo cliente");
            var cliente:Cliente = new Cliente(id, nombre,apellido,edad,sexoAux);
            listaPersonas.push(cliente);
            LimpiarContenedor();
            CargarTabla(listaPersonas);
        }
    }
    export function obtenerMasculinos(){
        return listaPersonas.filter((cliente) =>{
            return cliente.sexo == 1;
        });
    }
    export function obtenerFemeninos(){
        return listaPersonas.filter((cliente) =>{
            return cliente.sexo == 2;
        });
    }
    export function Filtrar(){
        let slcFiltro =(<HTMLInputElement>document.getElementById("slcFiltro")).value;

        switch(slcFiltro){
            case "nada":
                CargarTabla(listaPersonas);
                break;
            case "masculino":
                CargarTabla(obtenerMasculinos());
                break;
            case "femenino":
                CargarTabla(obtenerFemeninos());
                break;
        }
    }
    export function Promedio(){
        let txt = (<HTMLInputElement>document.getElementById("promedio"));
        var listaEdad: Array<number>;
        var retorno: number;

        if(listaPersonas == 0){
            txt.value = String(0);
            return;
        }else if(listaPersonas.length > 0){
            listaEdad = listaPersonas.map(x => (<Cliente>x).edad);
            retorno = listaEdad.reduce(function (total, num){
                total += num;
                return total;
            },0);
        }else{
            listaEdad = listaPersonas.map(x => (<Cliente>x).edad);
            retorno = listaEdad.reduce(function (total, num){
                total += num;
                return total;
            },0);
        }

        txt.value = String(retorno/listaPersonas.length);
    }
    export function Eliminar(event: any){
        let id = Number((<HTMLInputElement>document.getElementById("idId")).value);
        var flag = false;
        var idAux:number;
        var clienteAux:Cliente = new Cliente();
        var i = 0;
        var j = 0;

        listaPersonas.map(function(cliente){
            if(cliente.id == id){
                j = i;
                flag = true;
                console.log("Se elimino a " + cliente.nombre + " " + cliente.apellido);
            }
            i++;
        });
        if(flag){
            listaPersonas.splice(j, 1);
        }
        CargarTabla(listaPersonas);
        LimpiarContenedor();
    }
    
    export function LimpiarLista(){
        listaPersonas.map(function(cliente){
            
            listaPersonas.splice(0, listaPersonas.length);
            console.log("Se elimino a " + cliente.nombre + " " + cliente.apellido);
        });
        CargarTabla(listaPersonas);
    }

    export function LlenarContenedor(event){
        var row = event.target.parentNode;

        var id = row.childNodes[0].innerText;
        var nombre = row.childNodes[1].innerText;
        var apellido = row.childNodes[2].innerText;
        var edad = row.childNodes[3].innerText;
        var sexo = row.childNodes[0].innerText;

        (<HTMLInputElement>document.getElementById("idId")).value = id;
        (<HTMLInputElement>document.getElementById("txtNombre")).value = nombre;
        (<HTMLInputElement>document.getElementById("txtApellido")).value = apellido;
        (<HTMLInputElement>document.getElementById("txtEdad")).value = edad;
    }

    export function LimpiarContenedor(){
        (<HTMLInputElement>document.getElementById("idId")).value = "";
        (<HTMLInputElement>document.getElementById("txtNombre")).value = "";
        (<HTMLInputElement>document.getElementById("txtApellido")).value = "";
        (<HTMLInputElement>document.getElementById("txtEdad")).value = "";
    }

    export function CargarTabla(lista){
        document.getElementById("idTable").hidden = false;
        document.getElementById("nombreTable").hidden = false;
        document.getElementById("apellidoTable").hidden = false;

        let tbody = document.getElementById("tcuerpo");
        
        var nuevoTbody = document.createElement('tbody');
        tbody.parentNode.replaceChild(nuevoTbody,tbody);
        
        nuevoTbody.id = "tcuerpo";
        var tabla=document.getElementById("tcuerpo");
        
        for(var i=0; i<listaPersonas.length;i++)
        {
            var cliente=new Array(lista[i].id, lista[i].nombre,lista[i].apellido,
            lista[i].edad, lista[i].sexo);
            
            var trCliente=CrearNodo(cliente);
            trCliente.addEventListener("click", LlenarContenedor);
            tabla.appendChild(trCliente);
        }   
    }
    export function CrearNodo(cliente)
    {
    var trCliente=document.createElement("tr");
    

    var tdId=document.createElement("td");
    var tdNombre=document.createElement("td");
    var tdApellido=document.createElement("td");
    var tdEdad=document.createElement("td");
    var tdSexo=document.createElement("td");

    
    var txId=document.createTextNode(cliente[0]);
    var txNombre= document.createTextNode(cliente[1]);
    var txApellido=document.createTextNode(cliente[2]);
    var txEdad=document.createTextNode(cliente[3]);
    if(cliente[4]==1){
        var txSexo=document.createTextNode("Masculino");
    }else if(cliente[4] ==2){
        var txSexo=document.createTextNode("Femenino");
    }
    
    tdId.id = "id" + cliente[0];
    tdNombre.id = "nombre" + cliente[0];
    tdApellido.id = "apellido" + cliente[0];
    tdEdad.id = "edad" + cliente[0];
    tdSexo.id = "sexo" + cliente[0];
  
    tdId.appendChild(txId);
    tdNombre.appendChild(txNombre);
    tdApellido.appendChild(txApellido);
    tdEdad.appendChild(txEdad);
    tdSexo.appendChild(txSexo);
  
    trCliente.appendChild(tdId);
    trCliente.appendChild(tdNombre);
    trCliente.appendChild(tdApellido);
    trCliente.appendChild(tdEdad);
    trCliente.appendChild(tdSexo);
    
    return trCliente;
    }
    

}