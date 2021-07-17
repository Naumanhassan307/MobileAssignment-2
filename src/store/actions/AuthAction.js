
import {authentication} from '../../config/Firebase';
import { LOG_IN } from '../TypeConstants';

export const LoginAct=(email, password)=> async (dispatch)=>{
    
    try {
        let res = await authentication.signInWithEmailAndPassword(email, password);
        console.log("res is ",  res.user);
        let user = res.user
         dispatch({
           type: LOG_IN,
           payload: user,
         });
        
    } catch (error) {
        console.log("error in signin", error);
        alert("User Not Find!")
    }

   

}