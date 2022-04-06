// Codigo para obtener datos desde HTML a traves de: document.getElementById("......").value
//El codigo hace el calculo monetario de cuanto vale fabricar un locker con cierto numero de espacios y dependiendo del tamano seleccionado

function getData () {
    //Se obtiene los datos que se ingresen en los cuadros pequenos, medianos y grandes en HTML
    let espaciosPequenos = document.getElementById("espaciosPequenos").value;
    let espaciosMedianos = document.getElementById("espaciosMedianos").value;
    let espaciosGrandes = document.getElementById("espaciosGrandes").value;
    //Si no se ingresa ningun valor o si el valor es una letra, va a pedir que se ingrese nuevamente valores validos (FOR)
    if ((isNaN(espaciosPequenos) || isNaN(espaciosMedianos) || isNaN(espaciosGrandes)) || ((espaciosPequenos=="") || (espaciosMedianos=="") || (espaciosGrandes=="") ) )  {
            alert ("Favor ingresar solamente números positivos (de 0 a 20 números)");
            document.getElementById("espaciosPequenos").focus();
        }
    //Una vez pasado el condicional de valores validos, procede a hacer los calculos del valor individual de cada espacio dentro del locker
    else {
        console.log (`Tu pedido es de ${espaciosPequenos} espacios pequeños, ${espaciosMedianos} espacios medianos y ${espaciosGrandes} espacios grandes`);
        //Se multiplica el numero de espacios requeridos por el valor individual
        let sumaPequenos = espaciosPequenos* 28;        
        let sumaMedianos = espaciosMedianos * 45;
        let sumaGrandes = espaciosGrandes * 67;
        let sumaTotal = espaciosPequenos + espaciosMedianos + espaciosGrandes;
        //Se envia un mensaje con el resultado del calculo
        console.log (`$${sumaPequenos} + $${sumaMedianos} + $${sumaGrandes} = $${sumaTotal}`);
        //Una vez calculado el valor del locker se pide la estructura como estara organizada, es decir el numero de columnas y filas
        function locker (col,fila) { //Se crea una funcion para realizar el calculo
            while (fila < col ){ //se usa metodo de ciclos para asegurarse que el # de filas debe ser mayor que el # de columnas (WHILE)
                alert ("El numero de filas debe ser mayor que el de columnas");
                col = parseInt(prompt("Ingresa nuevo numero de columnas"));
                fila = parseInt(prompt("Ingresa nuevo numero de filas"));
            }
            console.log (`Tu locker tendrá ${numColumnas} columnas y ${numFilas} filas `); 
        }
        //Se solicita ingresar el numero de columnas y filas. Y se llama a la funcion para realizar los calculos.
        let numColumnas = parseInt (prompt("Ingrese el numero de columnas deseadas en el locker"));
        let numFilas = parseInt (prompt("Ingrese el numero de filas deseadas en el locker"));
        locker (numColumnas,numFilas);

    }   
 
}
