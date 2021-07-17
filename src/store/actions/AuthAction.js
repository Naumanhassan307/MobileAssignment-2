
import {authentication, db} from '../../config/Firebase';
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
export const SignUpAct=(newObj, email, password)=> async (dispatch)=>{
    
    try {

        let res = await authentication.createUserWithEmailAndPassword(email, password)
        console.log("signup res ", res);
        let usersRes = await db.collection("users").add(newObj)
        console.log("user res is ", usersRes);
        
    } catch (error) {
        console.log("error in signUp", error);
        alert("Something went wrong!!")
    }

   

}