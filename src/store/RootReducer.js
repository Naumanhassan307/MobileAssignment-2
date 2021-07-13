import {combineReducers} from 'redux';

import TodoReducer from './reducers/TaskReducer';

const RootReducer = combineReducers({
  TodoReducer,
});
export default RootReducer;
