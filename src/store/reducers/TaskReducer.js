
import { ADD_TASK } from "../TypeConstants";


const initialState={
    task:[]
}

function TodoReducer(state = initialState, action){
    switch (action.type) {
        
      case ADD_TASK:{
          console.log("data coming from action ", action.payload);
          return{
              ...state,
              task:[...state.task, action.payload]
          }
        }

      default:
       return state
    }
}
export default TodoReducer;