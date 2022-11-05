var viaje = function (pasajero, salida, llegada, medio){    // Declarando una variable y pasandole el valor de la función
    var pasajero = document.getElementById("pasajero").value;  //Captura el VALOR ingresado en la primera caja de texto 
	var salida = document.getElementById("salida").value;  
	var llegada = document.getElementById("llegada").value;
	var fecha = document.getElementById("myDate").value;

    var medio=obtenerRadio();   // declaramos una variable y pasamos el valor del campo tipo RADIO que el usuario selecciono

    var turista = pasajero + "  ->  " + salida + "  ->  " + llegada + "  ->  "+ medio + "  ->  "+ fecha;   // Variables que mostraremos su valor
	return turista;   
}


// En esta función sirve para capturar el valor de las opciónes del tipo RADIO que el usuario selecciono 

function obtenerRadio(){
	var radios = document.getElementsByName('medio');
	var radioCheked;
	for (var i = 0, length = radios.length; i < length; i++) {  //En este ejemplo se crea un ciclo FOR para conocer cuantos opciones tipo radio hay disponibles
	  if (radios[i].checked) {                                  // y se crea un vector para capturar la opcion selecionada
	    radioCheked=radios[i].value;
	    break;
	  }
	}
	return radioCheked;
}