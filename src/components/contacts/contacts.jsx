import React from 'react';
import styles from './contacts.module.scss';
import classNames from 'classnames';

import ContactsMap from '../contacts-map/contacts-map';

function Contacts() {
  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">
        Контакты
      </h2>
      <div className={styles.inner_wrapper}>
        <h3 className={classNames(styles.heading, styles.address_heading)}>
          Адрес
        </h3>
        <address className={classNames(styles.text, styles.address)}>
          Санкт-Петербург,
          <br />
          набережная реки Карповки, дом 5
        </address>
        <h3 className={styles.heading}>
          Режим работы
        </h3>
        <p className={styles.text}>
          Ежедневно, с 10:00 до 21:00
        </p>
        <h3 className={styles.heading}>
          Телефон
        </h3>
        <a className={styles.text} href="tel:88003335599">
          8 (800) 333 55 99
        </a>
        <h3 className={styles.heading}>
          E-mail
        </h3>
        <a className={styles.text} href="mailto:info@avto-moto.ru">
          info@avto-moto.ru
        </a>
      </div>
      <div className={styles.map}>
        <ContactsMap />
      </div>
    </div>
  );
}

export default Contacts;
