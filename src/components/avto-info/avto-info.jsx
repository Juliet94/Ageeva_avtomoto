import React from 'react';
import styles from './avto-info.module.scss';

import classNames from 'classnames';

function AvtoInfo() {
  return (
    <section className={styles.info}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Марпех 11
        </h2>
        <ul className={styles.list}>
          <li className={classNames(styles.list_item, styles.gas)}>
            бензин
          </li>
          <li className={classNames(styles.list_item, styles.transsmision)}>
            механика
          </li>
          <li className={classNames(styles.list_item, styles.power)}>
            100 л.c.
          </li>
          <li className={classNames(styles.list_item, styles.engine)}>
            1.4 л
          </li>
        </ul>
        <div className={styles.price}>
          <span className={styles.current_price}>
            2 300 000 ₽
          </span>
          <span className={styles.old_price}>
            2 400 000 ₽
          </span>
        </div>
        <a className={classNames(styles.link, styles.submit_application)} href="/">
          Оставить заявку
        </a>
        <a className={classNames(styles.link, styles.credit)} href="/">
          В кредит от 11 000 ₽
        </a>
      </div>
    </section>
  );
}

export default AvtoInfo;
