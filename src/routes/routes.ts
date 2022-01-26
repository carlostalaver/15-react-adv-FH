import { lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { LazyPage2 } from "../01-lazyload/pages";
import NoLazy from "../01-lazyload/pages/NoLazy";


/* Creé este type que incluye ambos tipos porque puede tener rutas que se carguen con lazy o rutas para que se cargan tradicionalmente */
type JSComponent = () => JSX.Element;

interface IRoute {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSComponent> | (JSComponent);
    name: string;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') ); 


export const routes: IRoute[] = [
    {
        path:'/lazyload/*', // todas las rutas que tengan un segmento de ruta llamado lazyload serán porcesadas aquí, por eso agregue el *
        to:'/lazyload', 
        Component: LazyLayout, 
        name: 'LazyLayout - Dash'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy, 
        name: 'No Lazy'
    }
];