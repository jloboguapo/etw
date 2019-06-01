import { createReducer } from 'redux-starter-kit';
import { clearData } from '../actionCreators';

export const defaults = {
  content: '',
  showHeader: false
};

export default createReducer(defaults, {
  [clearData]: () => defaults
});
