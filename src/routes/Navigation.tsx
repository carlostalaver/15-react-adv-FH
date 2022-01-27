import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
/* estes 3 importaciones la sustituyo por una solo importacion usando el archivo index.ts del directorio pages
import { LazyPage1 } from '../01-lazyload/pages/LazyPage1';
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3'; */



import logo from '../logo.svg';
import { routesPath } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback= { <small>Cargando...</small>}>
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>

            {
              routesPath.map(({ path, name }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    activeClassName="nav-active"
                    exact={false}>
                    {name}
                  </NavLink>
                </li>
              ))
            }

          </ul>
        </nav>

        <Switch>
          {
            routesPath.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                render={() => {
                  return <Component />
                }}
              />
            ))
          }
        </Switch>
        <Redirect to={routesPath[0].path} />
      </div>
    </Router>
    </Suspense>
  );
}