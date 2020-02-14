import { createReducer } from 'redux-starter-kit';

import {
  clearData,
  setMessageBannerContent,
  setExpandedState
} from '../actionCreators';

export const defaults = {
  content: '',
  showHeader: false,

  messageBannerContent: '',
  expandedState: false
};

export default createReducer(defaults, {
  [clearData]: () => defaults,
  [setMessageBannerContent]: (state, action) => {
    state.messageBannerContent = action.payload;
  },
  [setExpandedState]: (state, action) => {
    state.expandedState = action.payload;
  }
});
