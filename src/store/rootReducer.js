import { combineReducers } from 'redux';

import { post } from './reducers';

export const rootReducer = combineReducers({
  post,
});
