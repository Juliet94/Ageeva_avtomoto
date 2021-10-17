import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
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

  useEffect(() => {
    if (isModalActive) {
      document.body.style = 'overflow: hidden; padding-right: 17px';
    }

    if (!isModalActive) {
      document.body.style = 'overflow: visible; padding-right: 0';
    }
  }, [isModalActive]);

  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden">
        Отзывы
      </h2>
      <Link className={styles.link} to="/" onClick={onLeaveReviewButtonClick}>
        Оставить отзыв
      </Link>
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
