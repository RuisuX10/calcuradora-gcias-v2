import { calcularRetencion } from './calculoRetencion.js';

/* Valores */
/* Define los valores constantes utilizados para calcular la retención de impuestos. */
const alicuotaBienes = 0.02;
const alicuotaServicios = 0.02;
const alicuotaAlquiler = 0.06;
const noSujetoRetencionBienes = 224000;
const noSujetoRetencionAlq = 11200;
const noSujetoRetencionServ = 67170;

/* Función para el calculo de la retencion.  Si hay una retención anterior, se llama a la función calcularRetencion con un valor de noSujetoRetencion de 0. Si no hay una retención anterior, se llama a la función calcularRetencion con el valor de noSujetoRetencion especificado */
function calcularRet(neto, retAnt, alicuota, noSujetoRetencion) {
  const retencion = retAnt ? calcularRetencion(neto, 0, alicuota) : calcularRetencion(neto, noSujetoRetencion, alicuota);
  return retencion.toFixed(2);
}


/* Obtiene los elementos HTML relevantes para mostrar los resultados de la retención y el monto final a pagar. */
const boton = document.getElementById('boton');
const reten = document.getElementById("reten");
const aPagar = document.getElementById("aPagar");

/* Agrega un evento de clic para el botón, que ejecutara los calculos */
boton.addEventListener('click', () => {
  const concepto = document.getElementById('concepto').value;
  const retAnt = !!parseFloat(document.getElementById('retAnt').value);
  const neto = parseFloat(document.getElementById('neto').value);
  const total = parseFloat(document.getElementById('total').value);

  /* Define variables para almacenar el resultado de la retención y el monto final a pagar. */
  let retencion, aPagarse;

  /* Un switch para determinar el tipo de servicio o bien mueble proporcionado y calcular la retención correspondiente. */
  switch (concepto) {
    case 'Bienes Muebles':
      retencion = calcularRet(neto, retAnt, alicuotaBienes, noSujetoRetencionBienes);
      aPagarse = total - retencion;

      break;
    case 'Servicios':
      retencion = calcularRet(neto, retAnt, alicuotaServicios, noSujetoRetencionServ);
      aPagarse = total - retencion;

      break;
    case 'Alquileres':
      retencion = calcularRet(neto, retAnt, alicuotaAlquiler, noSujetoRetencionAlq);
      aPagarse = total - retencion;

      break;
  }
/* Muestra los resultados de la retención y el monto final a pagar formateados como una cadena de caracteres con el símbolo de moneda y separadores de miles en formato de Argentina. */

  reten.innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(retencion));
  aPagar.innerHTML = "$ " + (new Intl.NumberFormat('es-VE').format(aPagarse));
  /* Actualiza los elementos HTML para mostrar los resultados de la retención y el monto final a pagar cuando se hace clic en el botón. */
})
