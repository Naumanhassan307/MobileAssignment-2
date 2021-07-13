import { useState } from "react"
import { useDispatch } from "react-redux"
import { TaskAddAct } from "../../store/actions/Actions";


function useHome(){
    const [task , setTask] = useState("")
    const dsipatch = useDispatch();
    

    const ctaAddHandler = () =>{

        let newTask = {
            taskId: Math.random()*100000,
            taskMsg: task.toUpperCase(),
        }

        dsipatch(TaskAddAct(newTask))
        
    }
    
    return [setTask, ctaAddHandler];
}
export default useHome