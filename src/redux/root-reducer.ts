import {combineReducers} from 'redux';

import testReducer from './slices/test-slice';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
