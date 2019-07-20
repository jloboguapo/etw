import { createReducer } from 'redux-starter-kit';
import { clearData, setBannerButtonContent } from '../actionCreators';

export const defaults = {
  content: '',
  showHeader: false,
  bannerButtonContent: ''
};

export default createReducer(defaults, {
  [clearData]: () => defaults,
  [setBannerButtonContent]: (state, action) => {
    state.bannerButtonContent = action.payload;
  }
});
