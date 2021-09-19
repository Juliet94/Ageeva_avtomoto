import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import classNames from 'classnames';
import styles from './review-item.module.scss';

function ReviewItem({name, positive, negative, comment, rating, time}) {
  return (
    <li className={styles.list_item}>
      <p className={styles.name}>
        {name}
      </p>
      <div className={styles.quality_wrapper}>
        <h3 className={classNames(styles.heading, styles.heading_positive)}>
          Достоинства
        </h3>
        <p className={styles.text}>
          {positive}
        </p>
        <h3 className={classNames(styles.heading, styles.heading_negative)}>
          Недостатки
        </h3>
        <p className={styles.text}>
          {negative}
        </p>
      </div>
      <h3 className={styles.heading}>
        Комментарий
      </h3>
      <p className={styles.text}>
        {comment}
      </p>
      <div className={styles.rating_wrapper}>
        <StarRatings
          rating={rating}
          starDimension="17px"
          starSpacing="2px"
          starRatedColor="#d12136"
        />
        <span className={styles.rating_text}>
          Советует
        </span>
      </div>
      <div>
        <span className={styles.time}>
          {time}
        </span>
        <Link className={styles.link} to="/">
          Ответить
        </Link>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  name: PropTypes.string.isRequired,
  positive: PropTypes.string.isRequired,
  negative: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};

export default ReviewItem;
