
import { ADD_TASK } from "../TypeConstants";
import {db} from "../../config/Firebase"

export const TaskAddAct=(data)=> async (dsipatch)=>{
    console.log("Data in Action", data);
    try {
       let res = await db.collection("todos").add(data)
        console.log("res is ", await res);
    } catch (error) {
        console.log("error in add actio ", error);
    }
    
    dsipatch({
      type: ADD_TASK,
      payload: data,
    });
}