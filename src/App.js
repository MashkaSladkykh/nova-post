import { Provider } from 'react-redux';

import './scss/index.scss';
import { store } from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <h1>Hello</h1>
  </Provider>
);

export default App;
