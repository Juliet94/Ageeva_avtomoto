import React, {useState} from 'react';
import styles from './reviews.module.scss';
import {useSelector} from 'react-redux';
import {getReviews} from '../../store/selectors';

import ReviewItem from '../review-item/review-item';
import Modal from '../modal/modal';

function Reviews() {
  const reviews = useSelector(getReviews);
  const [isModalActive, setIsModalActive] = useState(false);

  const onLeaveReviewButtonClick = (evt) => {
    evt.preventDefault();
    setIsModalActive(true);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">
        Отзывы
      </h2>
      <a className={styles.link} href="/" onClick={onLeaveReviewButtonClick}>
        Оставить отзыв
      </a>
      <ul className={styles.list}>
        {reviews.map((reviewItem) => (
          <ReviewItem key={reviewItem.id} {...reviewItem} />
        ))}
      </ul>
      {isModalActive && <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} />}
    </div>
  );
}

export default Reviews;
