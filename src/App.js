import { Provider } from 'react-redux';

import { PostApp } from './routes/components';
import './scss/index.scss';
import { store } from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <PostApp/>
  </Provider>
);

export default App;
