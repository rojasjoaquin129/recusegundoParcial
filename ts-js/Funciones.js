var RecuSegundoParcial;
(function (RecuSegundoParcial) {
    var listaPersonas = new Array;
    window.addEventListener("load", function () {
        // (<HTMLInputElement>document.getElementById("idId")).value = String(idMayor());
        CargarTabla(listaPersonas);
        var btnGuardar = document.getElementById("btnGuardar");
        btnGuardar.addEventListener("click", AgregarCliente);
        var slcFiltro = document.getElementById("slcFiltro");
        slcFiltro.addEventListener("change", Filtrar);
        var btnPromedio = document.getElementById("btnPromedio");
        btnPromedio.addEventListener("click", Promedio);
        var btnEliminar = document.getElementById("btnEliminar");
        btnEliminar.addEventListener("click", Eliminar);
        var btnLimpiarTabla = document.getElementById("btnLimpiarTabla");
        btnLimpiarTabla.addEventListener("click", LimpiarLista);
        //let btnLimpiarDatos =document.getElementById("btnLimpiarDatos");
        //btnLimpiarDatos.addEventListener("click",LimpiarContenedor);
        document.getElementById("checkId").addEventListener("click", FiltroId);
        document.getElementById("checkNombre").addEventListener("click", FiltroNombre);
        document.getElementById("checkApellido").addEventListener("click", FiltroApellido);
        document.getElementById("checkEdad").addEventListener("click", FiltroEdad);
        document.getElementById("checkSexo").addEventListener("click", FiltroSexo);
    });
    function idMayor() {
        var retorno;
        if (listaPersonas.length < 1) {
            retorno = 0;
        }
        else {
            var listaPersonasAux = listaPersonas;
            retorno = listaPersonasAux.reduce(function (total, cliente) {
                if (cliente.id >= total) {
                    return cliente.id;
                }
                return total;
            }, 0);
        }
        return retorno + 1;
    }
    RecuSegundoParcial.idMayor = idMayor;
    function FiltroId() {
        if (document.getElementById("idTable").hidden == false) {
            document.getElementById("idTable").hidden = true;
            listaPersonas.map(function (dato) {
                document.getElementById("id" + dato.id).hidden = true;
            });
        }
        else if (document.getElementById("idTable").hidden == true) {
            document.getElementById("idTable").hidden = false;
            listaPersonas.map(function (dato) {
                document.getElementById("id" + dato.id).hidden = false;
            });
        }
    }
    RecuSegundoParcial.FiltroId = FiltroId;
    function FiltroNombre() {
        if (document.getElementById("nombreTable").hidden == false) {
            document.getElementById("nombreTable").hidden = true;
            listaPersonas.map(function (dato) {
                document.getElementById("nombre" + dato.id).hidden = true;
            });
        }
        else if (document.getElementById("nombreTable").hidden == true) {
            document.getElementById("nombreTable").hidden = false;
            listaPersonas.map(function (dato) {
                document.getElementById("nombre" + dato.id).hidden = false;
            });
        }
    }
    RecuSegundoParcial.FiltroNombre = FiltroNombre;
    function FiltroApellido() {
        if (document.getElementById("apellidoTable").hidden == false) {
            document.getElementById("apellidoTable").hidden = true;
            listaPersonas.map(function (dato) {
                document.getElementById("apellido" + dato.id).hidden = true;
            });
        }
        else if (document.getElementById("apellidoTable").hidden == true) {
            document.getElementById("apellidoTable").hidden = false;
            listaPersonas.map(function (dato) {
                document.getElementById("apellido" + dato.id).hidden = false;
            });
        }
    }
    RecuSegundoParcial.FiltroApellido = FiltroApellido;
    function FiltroEdad() {
        if (document.getElementById("edadTable").hidden == false) {
            document.getElementById("edadTable").hidden = true;
            listaPersonas.map(function (dato) {
                document.getElementById("edad" + dato.id).hidden = true;
            });
        }
        else if (document.getElementById("edadTable").hidden == true) {
            document.getElementById("edadTable").hidden = false;
            listaPersonas.map(function (dato) {
                document.getElementById("edad" + dato.id).hidden = false;
            });
        }
    }
    RecuSegundoParcial.FiltroEdad = FiltroEdad;
    function FiltroSexo() {
        if (document.getElementById("sexoTable").hidden == false) {
            document.getElementById("sexoTable").hidden = true;
            listaPersonas.map(function (dato) {
                document.getElementById("sexo" + dato.id).hidden = true;
            });
        }
        else if (document.getElementById("sexoTable").hidden == true) {
            document.getElementById("sexoTable").hidden = false;
            listaPersonas.map(function (dato) {
                document.getElementById("sexo" + dato.id).hidden = false;
            });
        }
    }
    RecuSegundoParcial.FiltroSexo = FiltroSexo;
    function AgregarCliente() {
        var id = idMayor();
        var nombre = document.getElementById("txtNombre").value;
        var apellido = document.getElementById("txtApellido").value;
        var edad = Number(document.getElementById("txtEdad").value);
        var sexo = document.getElementById("slcSexo").value;
        var sexoAux;
        var flag = true;
        console.log("esfsd");
        if (nombre.length < 1) {
            document.getElementById("txtNombre").className = "inputError";
            flag = false;
        }
        else {
            document.getElementById("txtNombre").className = "inputSinError";
        }
        if (apellido.length < 1) {
            document.getElementById("txtApellido").className = "inputError";
            flag = false;
        }
        else {
            document.getElementById("txtApellido").className = "inputSinError";
        }
        if (isNaN(edad) || edad < 1) {
            document.getElementById("txtEdad").className = "inputError";
            flag = false;
        }
        else {
            document.getElementById("txtEdad").className = "inputSinError";
        }
        if (flag == true) {
            switch (sexo) {
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
            var cliente = new RecuSegundoParcial.Cliente(id, nombre, apellido, edad, sexoAux);
            listaPersonas.push(cliente);
            LimpiarContenedor();
            CargarTabla(listaPersonas);
        }
    }
    RecuSegundoParcial.AgregarCliente = AgregarCliente;
    function obtenerMasculinos() {
        return listaPersonas.filter(function (cliente) {
            return cliente.sexo == 1;
        });
    }
    RecuSegundoParcial.obtenerMasculinos = obtenerMasculinos;
    function obtenerFemeninos() {
        return listaPersonas.filter(function (cliente) {
            return cliente.sexo == 2;
        });
    }
    RecuSegundoParcial.obtenerFemeninos = obtenerFemeninos;
    function Filtrar() {
        var slcFiltro = document.getElementById("slcFiltro").value;
        switch (slcFiltro) {
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
    RecuSegundoParcial.Filtrar = Filtrar;
    function Promedio() {
        var txt = document.getElementById("promedio");
        var listaEdad;
        var retorno;
        if (listaPersonas == 0) {
            txt.value = String(0);
            return;
        }
        else if (listaPersonas.length > 0) {
            listaEdad = listaPersonas.map(function (x) { return x.edad; });
            retorno = listaEdad.reduce(function (total, num) {
                total += num;
                return total;
            }, 0);
        }
        else {
            listaEdad = listaPersonas.map(function (x) { return x.edad; });
            retorno = listaEdad.reduce(function (total, num) {
                total += num;
                return total;
            }, 0);
        }
        txt.value = String(retorno / listaPersonas.length);
    }
    RecuSegundoParcial.Promedio = Promedio;
    function Eliminar(event) {
        var id = Number(document.getElementById("idId").value);
        var flag = false;
        var idAux;
        var clienteAux = new RecuSegundoParcial.Cliente();
        var i = 0;
        var j = 0;
        listaPersonas.map(function (cliente) {
            if (cliente.id == id) {
                j = i;
                flag = true;
                console.log("Se elimino a " + cliente.nombre + " " + cliente.apellido);
            }
            i++;
        });
        if (flag) {
            listaPersonas.splice(j, 1);
        }
        CargarTabla(listaPersonas);
        LimpiarContenedor();
    }
    RecuSegundoParcial.Eliminar = Eliminar;
    function LimpiarLista() {
        listaPersonas.map(function (cliente) {
            listaPersonas.splice(0, listaPersonas.length);
            console.log("Se elimino a " + cliente.nombre + " " + cliente.apellido);
        });
        CargarTabla(listaPersonas);
    }
    RecuSegundoParcial.LimpiarLista = LimpiarLista;
    function LlenarContenedor(event) {
        var row = event.target.parentNode;
        var id = row.childNodes[0].innerText;
        var nombre = row.childNodes[1].innerText;
        var apellido = row.childNodes[2].innerText;
        var edad = row.childNodes[3].innerText;
        var sexo = row.childNodes[0].innerText;
        document.getElementById("idId").value = id;
        document.getElementById("txtNombre").value = nombre;
        document.getElementById("txtApellido").value = apellido;
        document.getElementById("txtEdad").value = edad;
    }
    RecuSegundoParcial.LlenarContenedor = LlenarContenedor;
    function LimpiarContenedor() {
        document.getElementById("idId").value = "";
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtApellido").value = "";
        document.getElementById("txtEdad").value = "";
    }
    RecuSegundoParcial.LimpiarContenedor = LimpiarContenedor;
    function CargarTabla(lista) {
        document.getElementById("idTable").hidden = false;
        document.getElementById("nombreTable").hidden = false;
        document.getElementById("apellidoTable").hidden = false;
        var tbody = document.getElementById("tcuerpo");
        var nuevoTbody = document.createElement('tbody');
        tbody.parentNode.replaceChild(nuevoTbody, tbody);
        nuevoTbody.id = "tcuerpo";
        var tabla = document.getElementById("tcuerpo");
        for (var i = 0; i < listaPersonas.length; i++) {
            var cliente = new Array(lista[i].id, lista[i].nombre, lista[i].apellido, lista[i].edad, lista[i].sexo);
            var trCliente = CrearNodo(cliente);
            trCliente.addEventListener("click", LlenarContenedor);
            tabla.appendChild(trCliente);
        }
    }
    RecuSegundoParcial.CargarTabla = CargarTabla;
    function CrearNodo(cliente) {
        var trCliente = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdNombre = document.createElement("td");
        var tdApellido = document.createElement("td");
        var tdEdad = document.createElement("td");
        var tdSexo = document.createElement("td");
        var txId = document.createTextNode(cliente[0]);
        var txNombre = document.createTextNode(cliente[1]);
        var txApellido = document.createTextNode(cliente[2]);
        var txEdad = document.createTextNode(cliente[3]);
        if (cliente[4] == 1) {
            var txSexo = document.createTextNode("Masculino");
        }
        else if (cliente[4] == 2) {
            var txSexo = document.createTextNode("Femenino");
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
    RecuSegundoParcial.CrearNodo = CrearNodo;
})(RecuSegundoParcial || (RecuSegundoParcial = {}));
