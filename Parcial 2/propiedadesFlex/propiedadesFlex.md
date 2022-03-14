<center>
Ezequiel Cantu de la Rosa, <b>19100155</b><br>
<u>14/03/2022</u></center>

# Flexbox

## Contenedor flexible (Flex container)
El elemento **"padre"** que contiene los elementos flexibles. Un contenedor flexible se define usando los valores flex o inline-flex en la propiedad display.

|  Propiedad	|   Descripcion	|   Valores	| 
|---	|---	|---	|
|   Display	|   La propiedad display define un contenedor flex ( flexbox ).	|   flex o inline-flex	|
|   	Flex-direction|   Establece la dirección del eje principal y por tanto la dirección de los elementos flex.	|   Row (fila)	|
|   Flex - Wrap	|   Especifica si puede haber un cambio de línea ( wrap ) o no ( nowrap ).	|   Nowrap	|
|   Flex - Flow	|   Es la forma abreviada para las propiedades flex-direction y flex-wrap.	|   Row nowrap	|
|   Align - items	|   Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal.	|   Stretch	|
|   Alaign - Content	|   Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja.	|   Flex - start	|
|   Justify - Content	|   Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal.	|   Stretch	|


## Elemento flexible (Flex item)

Cada **hijo** de un contenedor flex se convierte en un elemento flexible. Si hay texto directamente incluido en el contenedor flexible, se envuelve automáticamente en un elemento flexible anónimo.

|  Propiedad	|   Descripcion	|   Valores	| 
|---	|---	|---	|
|   Align - self	|   Reposiciona elementos individuales relativamente al eje transversal. 	|    Align-items.	|
|   Flex - grow	|   Define cuánto puede crecer un elemento flex, si fuera necesario.	|   El valor por defecto es 0	|
|   Flex - shrink	|   Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario.	|   El valor por defecto es 1.	|
|   Flex - basis	|   Especifica el valor inicial del tamaño principal de un elemento flex.	|   El valor por defecto es 1	|
|   Order	|   Se utiliza para cambiar el orden en el que aparecen los elementos individuales.	|   El valor por defecto es 0	|
|   Flex	|   La forma abreviada para flex-grow, flex-shrink y flex-basis juntos.	|   El valor por defecto es 0, 1, auto	|


### Ejes

Cada diseño de "caja flexible" sigue dos ejes. El eje principal es el eje a lo largo del cual los elementos flexibles se suceden unos a otros. El eje secundario es el eje perpendicular al eje principal.

- La propiedad **flex-direction** establece el eje principal.
- La propiedad **justify-content** define cómo los elementos flexibles se disponen a lo largo del eje principal en la línea en curso.
- La propiedad **align-items** define cómo los elementos flexibles se disponen a lo largo del eje secundario de la línea en curso.
- La propiedad **align-self** define cómo cada elemento flexible se alinea respecto al eje secundario, y sustituye al valor por defecto establecido por align-items.

### Direcciones

Los lados **inicio principal/fin principal** (main start/main end) e **inicio secundario/fin secundario** (*cross start/cross end*) del contenedor flexible describen el origen y final del flujo de los elementos flexibles. Estos siguen el eje principal y secundario según el vector establecido por **writing-mode** (izquierda-a-derecha, derecha-a-izquierda, etc.).

- La propiedad **order** asigna elementos a grupos ordinales y determina qué elementos aparecen primero.
- La propiedad **flex-flow** combina las propiedades flex-direction y flex-wrap para colocar los elementos flexibles.

### Líneas

Los elementos flexibles pueden disponerse en una sola o varias líneas de acuerdo con la propiedad **flex-wrap**, que controla la dirección del eje secundario y la dirección en la que las nuevas líneas se apilan.

### Dimensiones

Los términos equivalentes a "altura" y "anchura" usados en los elementos flexibles son tamaño principal (*main size*) y tamaño secundario (*cross size*), que respectivamente siguen al eje principal y al eje secundario del contenedor flexible.

Las propiedades **min-height** y **min-width** tienen un nuevo valor que establece el tamaño mínimo de un elemento flexible.
La propiedad **flex** combina las propiedades **flex-basis**, **flex-grow**, y **flex-shrink** para establecer el grado de flexibilidad de los elementos flexibles.

