/**
 * export the state manager of the app
 */

import { counterReducer, inputReducer } from './reducers';
import { Store } from './store';

export const store = new Store({
  counter: counterReducer,
  input: inputReducer,
});
