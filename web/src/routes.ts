// pages
import Home from './pages/Home';
import About from './pages/About';
import Agreements from './pages/Agreements';
// import Settings from './pages/Settings';

// other
import { FC } from 'react';
import Login from './pages/Login';

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  needsLogin: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'login-route',
    title: 'Login',
    path: '/login',
    needsLogin: false,
    component: Login,
  },

  {
    key: 'home-route',
    title: 'Dashboard',
    path: '/',
    needsLogin: true,
    component: Home,
  },
  {
    key: 'agreements-route',
    title: 'Agreements',
    path: '/agreements',
    needsLogin: true,
    component: Agreements,
  },
  {
    key: 'about-route',
    title: 'About',
    path: '/about',
    needsLogin: true,
    component: About,
  },
];
