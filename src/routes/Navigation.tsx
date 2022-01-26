import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  /* el componente q defina en la funcion fallback será mostrado entre cargas de cada componente perezoso */
  return (
    <Suspense fallback ={ <span> Cargando...</span> }>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}> {name} </NavLink>
                  </li>
                ))

              }
            </ul>
          </nav>

          <Routes>

            {
              routes.map(route => (
                <Route key={route.to}
                  path={route.path}
                  element={<route.Component />} />

              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}