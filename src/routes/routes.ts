import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

//const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
//const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
//const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

interface IRoute {
    path: string;
    Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element),
    name: string,
    children?: IRoute[]
}

export const routesPath: IRoute[] = [
    {
        path:'/lazyload',
        Component: lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout')),
        name: 'Lazyloading nested',
    },
    {
        path:'/no-lazy',
        Component: NoLazy,
        name: 'No lazy loading',
    }
]