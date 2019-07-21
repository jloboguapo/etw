import { createReducer } from 'redux-starter-kit';
import { clearData, setMessageBannerContent } from '../actionCreators';

export const defaults = {
  content: '',
  showHeader: false,
  messageBannerContent: ''
};

export default createReducer(defaults, {
  [clearData]: () => defaults,
  [setMessageBannerContent]: (state, action) => {
    state.messageBannerContent = action.payload;
  }
});
