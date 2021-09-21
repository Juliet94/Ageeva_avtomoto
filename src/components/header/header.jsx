import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.scss';

import Logo from '../logo/logo';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link to="/">
                Автомобили
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Контакты
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Услуги
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Вакансии
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
