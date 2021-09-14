import React from 'react';
import styles from './reviews.module.scss';
import {useSelector} from 'react-redux';
import {getReviews} from '../../store/selectors';

import ReviewItem from '../reviewItem/review-item';

function Reviews() {
  const reviews = useSelector(getReviews);

  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">
        Отзывы
      </h2>
      <a className={styles.link} href="/">
        Оставить отзыв
      </a>
      <ul className={styles.list}>
        {reviews.map((reviewItem) => (
          <ReviewItem key={reviewItem.id} {...reviewItem} />
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
