import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
// import StarRatings from 'react-rating-stars-component'
import styles from './modal.module.scss';
import {useLocalStorage} form '../../hooks/useLocalStorage';
import {addReviewItem} form '../../store/action';

const ModalInputs = {
  NAME: 'name',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  COMMENT: 'comment',
};

function Modal({isModalActive, setIsModalActive}) {
  const nameRef = useRef('');
  const dispatch = useDispatch();

  const [name, setName] = useLocalStorage(ModalInputs.NAME, '');
  const [positive, setPositive] = useLocalStorage(ModalInputs.POSTIVE, '');
  const [negative, setNegative] = useLocalStorage(ModalInputs.NEGATIVE, '');
  const [comment, setComment] = useLocalStorage(ModalInputs.COMMENT, '');
  
  let id = 3;
  
  const onFormSubmit = () => {
    dispatch(addReviewItem({
      id,
      name,
      positive,
      negative,
      comment,
    }));
    
    id++
    
  };
  
  re-turn (
    <ReactModal
      className={styles.modal}
      isOpen={isModalActive}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => setIsModalActive(false)}
      onAfterOpen={() => nameRef.current.focus()}
    >
      <h2>
        Оставить отзыв
      </h2>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.inner_wrapper}>
            <label>
              {!name && <span> Пожалуйста, заполните поле </span>}
              <input
                className={classNames(styles.input, styles.name)}
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
            <div>
            <span>
              Оцените товар:
            </span>
              /* <StarRatings /> */
            </div>
            <textarea 
            className={styles.comment}
            cols="30" 
            rows="10" 
            placeholder="Комментарий"
            value={comment}
            onChange={(evt) => setComment(evt.target.value)}
            />
          </div>
        </div>
        <button className={styles.button_submit} type="submit">
          Оставить отзыв
        </button>
        <button 
          className={styles.button_close}
          onClick={() setIsModalActive(false)}
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
