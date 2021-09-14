import {createReducer} from '@reduxjs/toolkit';
import {addReviewItem} from './action';

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'Борис Иванов',
      positive: 'мощность, внешний вид',
      negative: 'Слабые тормозные колодки (пришлось заменить)',
      comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
      rating: 3,
      time: '1 минуту назад',
    },
    {
      id: 2,
      name: 'Марсель Исмагилов',
      positive: 'Стиль, комфорт, управляемость',
      negative: 'Дорогой ремонт и обслуживание',
      comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
      rating: 3,
      time: '1 минуту назад',
    },
  ],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addReviewItem, (state, action) => {
      state.reviews.push(action.payload);
    });
});