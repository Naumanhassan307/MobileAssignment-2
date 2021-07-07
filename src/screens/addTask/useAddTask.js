import {useState} from "react"
import { useDispatch } from "react-redux";

import AddTaskAction from "../../store/actions/Actions"

function UseAddTask(){
    const [task, setTask] = useState("");

    const dispatch = useDispatch()
    const ctaHandler = () =>{
        const ID = Math.floor(Math.random()* 9000000);
        const d = `TASKID-${ID}`
        const newTask = {
          myDate: new Date().toISOString().split('T')[0],
          myTime: new Date().toLocaleTimeString(),
          myTask: task,
          myId: d,
        };

        dispatch(AddTaskAction(newTask, setTask('')));

    }


    return [setTask, ctaHandler]
}
export default UseAddTask