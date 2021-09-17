import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import StarRatings from 'react-rating-stars-component';
import styles from './modal.module.scss';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {addReviewItem} from '../../store/action';

const ModalInputs = {
  NAME: 'name',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  COMMENT: 'comment',
  RATING: 'rating',
};

const DEFAULT_TIME = '1 минуту назад';

function Modal({isModalActive, setIsModalActive}) {
  const nameRef = useRef('');
  const dispatch = useDispatch();

  const [name, setName] = useLocalStorage(ModalInputs.NAME, '');
  const [positive, setPositive] = useLocalStorage(ModalInputs.POSITIVE, '');
  const [negative, setNegative] = useLocalStorage(ModalInputs.NEGATIVE, '');
  const [comment, setComment] = useLocalStorage(ModalInputs.COMMENT, '');
  const [rating, setRating] = useLocalStorage(ModalInputs.RATING, 0);

  let id = 3;

  const isNameInputed = name.trim().length > 0;
  const isCommentInputed = comment.trim().length > 0;

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addReviewItem({
      id: id++,
      name,
      positive,
      negative,
      comment,
      rating,
      time: DEFAULT_TIME,
    }));

    setName('');
    setPositive('');
    setNegative('');
    setComment('');
    setRating(0);
    setIsModalActive(false);
  };

  return (
    <ReactModal
      className={styles.modal}
      isOpen={isModalActive}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => setIsModalActive(false)}
      onAfterOpen={() => nameRef.current.focus()}
      ariaHideApp={false}
    >
      <h2 className={styles.heading}>
        Оставить отзыв
      </h2>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={styles.wrapper}>
          <div className={styles.inner_wrapper}>
            <label className={styles.label}>
              {!isNameInputed && <span className={styles.required}> Пожалуйста, заполните поле </span>}
              <input
                className={classNames(styles.input, styles.name, {[styles.error]: !isNameInputed})}
                type="text"
                placeholder="Имя"
                value={name}
                ref={nameRef}
                onChange={(evt) => setName(evt.target.value)}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder="Достоинства"
                value={positive}
                onChange={(evt) => setPositive(evt.target.value)}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder="Недостатки"
                value={negative}
                onChange={(evt) => setNegative(evt.target.value)}
              />
            </label>
          </div>
          <div className={styles.inner_wrapper}>
            <div className={styles.rating_wrapper}>
              <span className={styles.text}>
                Оцените товар:
              </span>
              <StarRatings
                classNames={styles.rating}
                size={35}
                value={+rating}
                onChange={setRating}
                activeColor="#d12136"
                color="rgba(189, 190, 194, 0.7)"
                a11y
              />
            </div>
            <label className={styles.label}>
              <textarea
                className={classNames(styles.comment, {[styles.error]: !isCommentInputed})}
                cols="33"
                rows="5"
                placeholder="Комментарий"
                value={comment}
                onChange={(evt) => setComment(evt.target.value)}
              />
            </label>
          </div>
        </div>
        <button
          className={styles.button_submit}
          type="submit"
          disabled={!isNameInputed || !isCommentInputed}
        >
          Оставить отзыв
        </button>
        <button
          className={styles.button_close}
          onClick={() => setIsModalActive(false)}
        />
      </form>
    </ReactModal>
  );
}

Modal.propTypes = {
  isModalActive: PropTypes.bool.isRequired,
  setIsModalActive: PropTypes.func.isRequired,
};

export default Modal;
