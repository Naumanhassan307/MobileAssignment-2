import {combineReducers} from 'redux';

import TaskReducer from './reducers/TaskReducer';

const RootReducer = combineReducers({
  TaskReducer,
});
export default RootReducer;
