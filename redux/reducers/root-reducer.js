import { combineReducers } from 'redux';

import test from '@/redux/reducers/test-reducer';

const rootReducer = combineReducers({
  test,
});

export default rootReducer;
