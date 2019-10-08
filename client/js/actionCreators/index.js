import { createAction } from 'redux-starter-kit';

export const clearData = createAction('CLEAR_DATA');
export const setMessageBannerContent = createAction(
  'SET_MESSAGE_BANNER_CONTENT'
);
export const setExpandedState = createAction('SET_EXPANDED_STATE');
