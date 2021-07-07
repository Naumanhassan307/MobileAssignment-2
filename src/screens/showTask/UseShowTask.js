import { useSelector, useDispatch } from "react-redux";

import {RemoveTaskAction} from '../../store/actions/Actions';

function UseShowTask(){
    const store = useSelector(store => store.TaskReducer.task);
    console.log("STORE IS ", store);

    const dispatch = useDispatch();

    const ctaRemoveHandler=(id)=>{
        console.log("Remove Running...ID in action", id);
        dispatch(RemoveTaskAction(id));
    }

    return [store, ctaRemoveHandler];

}
export default UseShowTask;
