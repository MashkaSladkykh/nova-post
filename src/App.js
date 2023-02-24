import { Provider } from 'react-redux';

import { PostApp } from './routes/components';
import './scss/index.scss';
import { store } from './store/configureStore';

export const App = () => (
  <Provider store={store}>
    <PostApp/>
  </Provider>
);