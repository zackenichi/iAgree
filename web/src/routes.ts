// pages
import Home from './pages/Home';
import About from './pages/About';
import Agreements from './pages/Agreements';
// import Settings from './pages/Settings';

// other
import { FC } from 'react';

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Dashboard',
    path: '/',
    enabled: true,
    component: Home,
  },
  {
    key: 'agreements-route',
    title: 'Agreements',
    path: '/agreements',
    enabled: true,
    component: Agreements,
  },
  // {
  //   key: 'settings-route',
  //   title: 'Settings',
  //   path: '/settings',
  //   enabled: true,
  //   component: Settings,
  // },
  {
    key: 'about-route',
    title: 'About',
    path: '/about',
    enabled: true,
    component: About,
  },
];
