import {combineReducers} from 'redux';

import TaskReducer from './reducers/TaskReducer';
import AuthReducer from './reducers/AuthReducer';
const RootReducer = combineReducers({
  TaskReducer,
  AuthReducer,
});
export default RootReducer;
