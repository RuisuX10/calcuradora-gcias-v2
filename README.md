# calcuradora-gcias-v2
calculadora para retencion de ganancias

Este proyecto lo ralice para agilizar las operaciones que realizo en la empresa donde trabajo.
Consta de las operaciones habituales de la empresa que son pagos por alquiler, bienes y servicios.
Iré agregando mas tipo de operaciones y funcionalidades con el pasar del tiempo.
Tipos de operaciones que soporte:
-	Pago por compra de bienes muebles
-	Pago de alquileres ( cualquier tipo)
-	Pago por servicios.

El proyecto lo hice con las siguientes tecnologías: 
-	Html
-	Css
-	Javascript.
-	Bootstrap.

Esta app calcula la retención de impuestos en función del tipo de servicio o bien mueble proporcionado y de ciertos valores preestablecidos.

El código comienza importando una función llamada calcularRetencion desde un módulo llamado calculoRetencion.js. Posteriormente, se definen varios valores constantes para las distintas tasas de retención de impuestos aplicables según el tipo de servicio o bien mueble, así como valores mínimos para no estar sujetos a retención de impuestos en cada categoría.

A continuación, se define una función llamada calcularRet que toma como entrada el monto neto, la retención anterior, la tasa de retención y el valor mínimo para no estar sujeto a retención. La función llama a la función calcularRetencion importada al principio y devuelve el valor de retención como una cadena de caracteres con dos decimales.

Luego, se define un evento para un botón de la página que se activa cuando el usuario hace clic en él. Este evento recupera varios valores de entrada del usuario, como el concepto del servicio, la retención anterior, el monto neto y el monto total. A partir de estos valores, se calcula la retención y el monto final a pagar utilizando la función calcularRet y se muestran en la página en dos elementos HTML separados.

En general, el código parece estar bien organizado y utiliza buenas prácticas de programación como constantes y funciones reutilizables. Sin embargo, sería conveniente agregar algunas validaciones de entrada para asegurarse de que los valores ingresados por el usuario sean numéricos y se ajusten a las especificaciones establecidas. Además, se podría mejorar la legibilidad del código agregando comentarios que expliquen qué hace cada sección o variable.