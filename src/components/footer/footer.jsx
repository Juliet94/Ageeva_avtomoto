import React from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link to="/">
                Корпоративным клиентам
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Клиентам
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Аренда авто
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Каршеринг
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Как продать авто
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Trade-in
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link to="/">
                Test drive
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
