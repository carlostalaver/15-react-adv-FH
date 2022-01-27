

import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { LazyPage2 } from '../pages';
import LazyPage1 from '../pages/LazyPage1';
import LazyPage3 from '../pages/LazyPage3';
/* la direfencia en este archivo de rutas es que NO usare el componente <Router></Router>, ya que solo
se debe usar en la definicion de rutas secundarias */
export const Navigation = () => {

    let { path, url } = useRouteMatch();


    return (
        <>
            <h2>LazyLayout Hijas </h2>
            <ul>
                <li>
                    <Link to={`${url}/lazy1`}>Lazy Page 1</Link>
                </li>
                <li>
                    <Link to={`${url}/lazy2`}>Lazy Page 2</Link>
                </li>
                <li>
                    <Link to={`${url}/lazy3`}>Lazy Page 3</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={ `${ path }/lazy1` }>
                   <LazyPage1 />
                </Route>
                <Route exact path={ `${ path }/lazy2` }>
                   <LazyPage2 />
                </Route>
                <Route exact path={ `${ path }/lazy1` }>
                   <LazyPage3 />
                </Route>

                <Redirect to={ `${ path }/lazy1` } />
            </Switch>
        </>
    );
};
