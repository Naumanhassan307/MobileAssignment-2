
import { ADD_TASK ,REMOVE_TASK} from "../TypeConstants"

export const AddTaskAction=(data)=>{
    // console.log("Data in Action from Dispatch", data);
    return {
      type: ADD_TASK,
      payload: data,
    };
}
export default AddTaskAction;



export const RemoveTaskAction=(data)=>{
    console.log("Remove in Action from Dispatch", data);
    return {
      type: REMOVE_TASK,
      payload: data,
    };
}
 