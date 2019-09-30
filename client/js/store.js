import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducers/rootReducer';

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}
