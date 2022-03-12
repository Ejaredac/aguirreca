# Flexbox
**Eduardo Jared Aguirre Cardenas - 19100140**

-------------
## Propiedades

---

### Flex-Container 

| Propiedad | Que hace | Valores |
| --------- | -------- | ------- |
|Display|Si su valor es flex o inline-flex, la propiedad display define un contenedor flex ( flexbox ).| flex  inline-flex; -ms-flexbox -ms-inline-flexbox;|
|flex-direction|Establece la dirección del eje principal y por tanto la dirección de los elementos flex. El valor por defecto es row ( fila ).| row row-reverse  column column-reverse;|
|flex-wrap|Especifica si puede haber un cambio de línea ( wrap ) o no ( nowrap ). El valor por defecto es nowrap.|nowrap wrap wrap-reverse;|
|flex-flow|Es la forma abreviada para las propiedades flex-direction y flex-wrap. El valor por defecto es row nowrap|flex-direction [flex-wrap]|
|align-items|Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal.El valor por defecto es stretch.|flex-start  flex-end  center  baseline  stretch;-ms-flex-align:start  end  center  baseline  stretch;|
|justify-content|Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja. El valor por defecto es flex-start.|flex-start  flex-end  center  space-between  space-around;-ms-flex-pack: start  end  center  justify  justify;|
|align-content|Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal. El valor por defecto es stretch.|flex-start  flex-end  center  space-between  space-around  stretch;-ms-flex-line-pack: start  end  center  justify  stretch;|
### Flex-Elements
| Propiedad | Que hace | Valores |
| --------- | -------- | ------- |
|align-self|Reposiciona elementos individuales relativamente al eje transversal. Generalmente se trata de elementos posicionados con align-items.|auto  flex-start  flex-end  center  baseline  stretch; -ms-flex-item-align:auto  start  end  center  baseline  stretch;|
|flex-grow|Define cuánto puede crecer un elemento flex, si fuera necesario. El valor por defecto es 0.|flex-grow: número  initial  inherit;|
|flex-shrink|Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario. El valor por defecto es 1.|flex-shrink: número  initial  inherit;|
|flex-basis|Especifica el valor inicial del tamaño principal de un elemento flex. El valor por defecto es auto.|flex-basis: número  auto  initial  inherit;|
|flex|La forma abreviada para flex-grow, flex-shrink y flex-basis juntos. El valor por defecto es 0 1 auto.|flex: none  flex-grow [flex-shrink] [flex-basis];|
|order|Se utiliza para cambiar el orden en el que aparecen los elementos individuales.|order: número  initial  inherit;|