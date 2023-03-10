import { calcularRetencion } from './calculoRetencion.js';

/* Valores */

const retMin = 240;

const alicuotaBienes = 0.02;
const alicuotaServicios = 0.02;
const alicuotaAlquiler = 0.06;

const noSujetoRetencionBienes = 224000;
const noSujetoRetencionAlq = 11200;
const noSujetoRetencionServ = 67170;

/* Funciones Especificas */

function calcularRetBienes(neto, retAnt){
	if (retAnt){
		return calcularRetencion(neto,0,alicuotaBienes);
	} else {
		return calcularRetencion(neto,noSujetoRetencionBienes,alicuotaBienes);
	}
	
};

function calcularRetServ(neto, retAnt){
	if (retAnt){
		return calcularRetencion(neto,0,alicuotaServicios);
	} else {
		return calcularRetencion(neto,noSujetoRetencionServ,alicuotaServicios);
	}
	
};

function calcularRetAlq(neto, retAnt){
	if (retAnt){
		return calcularRetencion(neto,0,alicuotaAlquiler);
	} else {
		return calcularRetencion(neto,noSujetoRetencionAlq,alicuotaAlquiler);
	}
};

/* ------------- */

let boton = document.getElementById('boton');

boton.addEventListener('click',() => {
	let concepto = document.getElementById('concepto').value;
	let retAnt = !!parseFloat(document.getElementById('retAnt').value);
	let neto = parseFloat(document.getElementById('neto').value);
	let total = parseFloat(document.getElementById('total').value);

	switch(concepto) {
		case 'Bienes Muebles':
			let retencionA = calcularRetBienes(neto, retAnt).toFixed([2]);
			let aPagarA = total - retencionA;

			document.getElementById("reten").innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(retencionA));
			document.getElementById("aPagar").innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(aPagarA));
			break
		case 'Servicios':
			let retencionB = calcularRetServ(neto, retAnt).toFixed([2]);
			let aPagarB = total - retencionB;

			document.getElementById("reten").innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(retencionB));
			document.getElementById("aPagar").innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(aPagarB));
			break
		case 'Alquileres':
			let retencionC = calcularRetAlq(neto, retAnt).toFixed([2]);
			let aPagarC = total - retencionC;

			document.getElementById("reten").innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(retencionC));
			document.getElementById("aPagar").innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(aPagarC));
			break
	}
	
})