import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo';
import Cart from 'components/layout/Cart';
import styles from './index.module.scss';

const navigationItems = [
  {
    id: 0,
    route: '/',
    name: 'Меню',
  },
  {
    id: 1,
    route: '/stocks',
    name: 'Акции',
  },
  {
    id: 2,
    route: '/contacts',
    name: 'Доставка и контакты',
  },
];

const Header = () => (
  <header className={classNames('header', styles.header)}>
    <div className="container">
      <Logo />
      <nav>
        {
          navigationItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              exact
            >
              { item.name }
            </NavLink>
          ))
        }
      </nav>
      <Cart />
    </div>
  </header>
);

export default Header;
