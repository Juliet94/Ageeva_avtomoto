import React from 'react';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a href="/">
                Корпоративным клиентам
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="/">
                Клиентам
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="/">
                Аренда авто
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="/">
                Каршеринг
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="/">
                Как продать авто
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="/">
                Trade-in
              </a>
            </li>
            <li className={styles.list_item}>
              <a href="/">
                Test drive
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>  
  );
}

export default Footer;
