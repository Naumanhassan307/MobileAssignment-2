import { useDispatch, useSelector } from "react-redux";
import {TaskDeleteAct, TaskFetchAct} from "../../store/actions/Actions"

function useShowTask(){

   
   console.log('Todos comming from store is ', storeTodo);
    
    const dispatch = useDispatch();


    const ctaFetchHandler=()=>{

        dispatch(TaskFetchAct())
        
    }
const storeTodo =  useSelector(store => store.TaskReducer.task);
console.log('Todos comming from store after fetching is ', storeTodo);
     
    const ctaDeleteHandler = (docid, taskId) =>{

        console.log("docid=>", docid);
        console.log("taskid=>", taskId);
       dispatch(TaskDeleteAct(docid, taskId));


    }


    return [ctaFetchHandler, storeTodo, ctaDeleteHandler];
}
export default useShowTask;
