import {ADD_TASK, FETCH_TASK, DELETE_TASK} from '../TypeConstants';

const initialState = {
  task: [],
};

function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      console.log('data coming from action ', action.payload);
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    }
    case FETCH_TASK: {
      console.log('Arr coming from fetch action ', action.payload);
      return {
        ...state,
        task: action.payload,
      };
    }
    case DELETE_TASK: {
     const newTasks = state.task.filter((item) => {
          if (item.taskId !== action.payload) return item;
        });

        return {
          ...state,
          task: [...newTasks],
        };
    }

    default:
      return state;
  }
}
export default TaskReducer;
