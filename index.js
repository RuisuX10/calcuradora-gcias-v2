/* ========== VALORES ========== */

const retMin = 240; /* Retencion minima */
/* Importes no sujeto a retencion */
const bienNoSujeto = 224000;  /* importe no sujeto a retencion de bienes */
const servNoSujeto = 67170;   /* importe no sujeto a retencion de servicios */
const alquNoSujeto = 11200;   /* importe no sujeto a retencion de alquileres */

/* alicuotas */
const bienAlicuota = 0.02;    /* Alicuota para bienes */
const servAlicuota = 0.02;    /* Alicuota para servicios */
const alqAlicuota = 0.06;     /* Alicuota para alquiler */

/* ========== FUNCIONES ========== */

function retencion(NoSujeto, alicuota){  /* funcion del calculo de la retencion */
	if (retAnt == "no"){
		result = ((neto - NoSujeto)*alicuota).toFixed([2])
		resultFormat = new Intl.NumberFormat('es-VE').format(result)
    	if (result >= retMin){
    	document.getElementById("reten").innerHTML = "$ " + resultFormat;
    	apagar = (total - result).toFixed([2])
		apagarFormat = new Intl.NumberFormat('es-VE').format(apagar)
    	document.getElementById("aPagar").innerHTML = "$ " + apagarFormat;
   		}
		else {
		document.getElementById("reten").innerHTML = "No supera la retencion minima" ;
		document.getElementById("aPagar").innerHTML = ""
		}
	}
	else {
		result = (neto*alicuota).toFixed([2]);
   		if (result >= retMin){
		resultFormat = new Intl.NumberFormat('es-VE').format(result)
    	document.getElementById("reten").innerHTML = "$ " + resultFormat;
    	apagar = total - result
		apagarFormat = new Intl.NumberFormat('es-VE').format(apagar)
    	document.getElementById("aPagar").innerHTML = "$ " + (apagarFormat);
    	}
		else {
		document.getElementById("reten").innerHTML = "No supera la retencion minima" ;
		document.getElementById("aPagar").innerHTML = ""
		}

}
}

function botRet() { /* funcion que ejecuta el boton "Calcular Retencion", obteniendo los valores del formulario y luego ejecutando la funcion retencion */
    concepto = document.getElementById("concepto").value;
    retAnt = document.getElementById("retAnt").value;
    neto = parseFloat(document.getElementById("neto").value);
    total = parseFloat(document.getElementById("total").value);

/* 	console.log(concepto);
	console.log(retAnt);
	console.log(neto);
	console.log(total);

	console.log(typeof(concepto));
	console.log(typeof(retAnt));
	console.log(typeof(neto));
	console.log(typeof(total)); */

	if (concepto == "Bienes Muebles" ) {
		retencion (bienNoSujeto, bienAlicuota)
	}
	else if (concepto == "Servicios") {
		retencion (servNoSujeto, servAlicuota)
		/* document.getElementById("reten").innerHTML = result; */
	}
	else {
		retencion (alquNoSujeto, alqAlicuota)
		/* document.getElementById("reten").innerHTML = result; */
	}

	console.log(new Intl.NumberFormat('es-VE').format(12000.45));
}
