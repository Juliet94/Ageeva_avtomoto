import React from 'react';
import styles from './avto-info.module.scss';

import classNames from 'classnames';

function AvtoInfo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Марпех 11
      </h2>
      <ul className={styles.list}>
        <li className={classNames(styles.list_item, styles.gas)}>
          бензин
        </li>
        <li className={classNames(styles.list_item, styles.transmission)}>
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
          2&nbsp;300&nbsp;000&nbsp;₽
        </span>
        <span className={styles.old_price}>
          2&nbsp;&nbsp;400&nbsp;000&nbsp;₽
        </span>
      </div>
      <a className={classNames(styles.link, styles.submit_application)} href="/">
        Оставить заявку
      </a>
      <a className={classNames(styles.link, styles.credit)} href="/">
        В кредит от 11&nbsp;000&nbsp;₽
      </a>
    </div>
  );
}

export default AvtoInfo;
