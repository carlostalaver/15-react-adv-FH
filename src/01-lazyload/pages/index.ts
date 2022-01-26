
/* Este archivo se excarga UNICAMENTE de exportar componentes, es es para evitar tener una gran cantidad de imports y no sobre cargarlos
   Obligatoriamente debe llamarse index.ts
ojo: si quiero imoprtar uno de esos archivos se hace 

import { LazyPage1 } from "../01-lazyload/pages" es lo mismo que decir import { LazyPage1 } from "../01-lazyload/pages/index.ts"

*/
export { LazyPage1 } from "./LazyPage1";
export { LazyPage2 } from "./LazyPage2";
export { LazyPage3 } from "./LazyPage3";
