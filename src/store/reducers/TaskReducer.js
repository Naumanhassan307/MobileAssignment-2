
import {ADD_TASK, REMOVE_TASK} from '../TypeConstants';

const initialState = {
    
    task: [],
}


const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:{
          console.log("Data in Reducer come from Action ", action.payload);
          return{
              ...state,
              task: [...state.task, action.payload]
          };
      }
       case REMOVE_TASK:{
           console.log("Remove Id in Reducer ", action.payload);

           const newTasks = state.task.filter((item) => item.myId !== action.payload)
           return{
               ...state,
               task: newTasks
           }
       }

      default:
       return state;
    }

}
export default TaskReducer;