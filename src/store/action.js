import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_REVIEW_ITEM: 'data/addReviewItem',
};

export const addReviewItem = createAction(ActionType.ADD_REVIEW_ITEM, (reviewItem) => ({
  payload: reviewItem,
}));
