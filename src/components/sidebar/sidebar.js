import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import loadable from '@loadable/component';
import './sidebar.css';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => import('../../Test'),
    linkTo: '/',
  },
  {
    path: '/test2',
    component: () => import('../../Test2'),
    linkTo: 'test2',
  },
  {
    path: '/test3',
    component: () => import('../../Test3'),
    linkTo: 'test3',
    childrenRoute: [
      {
        path: '/test2',
        linkTo: 'test2',
      },
      {
        path: '/test3',
        linkTo: 'test3',
      },
    ],
  },
  {
    path: '/test4',
    component: () => import('../../Test4'),
    linkTo: 'test4',
    childrenRoutes: [
      {
        path: '/test2',
        linkTo: 'test2',
      },
    ],
  },
];

const Sidebar = () => (
  <Router>
    <div className="flex">
      <div className="sidebar">
        <ul className="menu" style={{ listStyleType: 'none', padding: 0 }}>
          {routes.map((route) => (
            <li key={route.linkTo + Math.random()}>
              <Link
                to={route.linkTo}
              >
                {route.linkTo === '/' ? 'home' : route.linkTo}
                { route.childrenRoutes || route.childrenRoute ? ' >' : null }
              </Link>
              {route.childrenRoutes && (
                <ul className="child-routes">
                  {route.childrenRoutes.map((child) => (
                    <li key={child.path + Math.random()}>
                      <Link
                        to={child.linkTo}
                      >
                        {child.linkTo}
                      </Link>
                    </li>
                  ))}
                  <li><Link to="https://www.google.com">Fake 2</Link></li>
                  <li><Link to="https://www.google.com">Fake 3</Link></li>
                  <li><Link to="https://www.google.com">Fake 2</Link></li>
                  <li><Link to="https://www.google.com">Fake 3</Link></li>
                  <li><Link to="https://www.google.com">Fake 2</Link></li>
                  <li><Link to="https://www.google.com">Fake 3</Link></li>
                </ul>
              )}
              {route.childrenRoute && (
                <ul className="child-route">
                  {route.childrenRoute.map((child) => (
                    <li key={child.path + Math.random()}>
                      <Link
                        to={child.linkTo}
                      >
                        {child.linkTo}
                      </Link>
                    </li>
                  ))}
                  <li><Link to="https://www.google.com">Fake 2</Link></li>
                  <li><Link to="https://www.google.com">Fake 3</Link></li>
                  <li><Link to="https://www.google.com">Fake 2</Link></li>
                  <li><Link to="https://www.google.com">Fake 3</Link></li>
                  <li><Link to="https://www.google.com">Fake 2</Link></li>
                  <li><Link to="https://www.google.com">Fake 3</Link></li>
                </ul>
              )}
            </li>
          ))}
          <li><Link to="https://www.google.com">Fake 2</Link></li>
          <li><Link to="https://www.google.com">Fake 3</Link></li>
          <li><Link to="https://www.google.com">Fake 2</Link></li>
          <li><Link to="https://www.google.com">Fake 3</Link></li>
          <li><Link to="https://www.google.com">Fake 2</Link></li>
          <li><Link to="https://www.google.com">Fake 3</Link></li>
        </ul>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </div>
      <div className="component">
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={loadable(route.component)}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default Sidebar;
