import React from 'react';
import classNames from 'classnames';
import styles from './specs.module.scss';

function Specs() {
  return (
    <table className={styles.table}>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Трансмиссия
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          Роботизированная
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Мощность двигателя, л.с.
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          249
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Тип двигателя
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          Бензиновый
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Привод
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          Полный
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Объем двигателя, л
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          2.4
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Макс. крутящий момент
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          370/4500
        </td>
      </tr>
      <tr className={styles.row}>
        <td className={classNames(styles.cell, styles.left_cell)}>
          Количество цилиндров
        </td>
        <td className={classNames(styles.cell, styles.right_cell)}>
          4
        </td>
      </tr>
    </table>
  );
}

export default Specs;
