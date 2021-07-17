
import {authentication, db} from '../../config/Firebase';
import { LOG_IN , LOG_OUT} from '../TypeConstants';

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
         switch (error.code) {
           case 'auth/invalid-email':
             alert('Please enter valid E-mail!');
             break;
           case 'auth/weak-password':
             alert('Password should be atleast 7 characters!');
             break;

           default:
              alert('User Not Find!');
              break;
         }
       
    }

   

}
export const SignUpAct=(newObj, email, password)=> async (dispatch)=>{
    
    try {

        let res = await authentication.createUserWithEmailAndPassword(email, password)
        console.log("signup res ", res);
        let usersRes = await db.collection("users").add(newObj)
        console.log("user res is ", usersRes);
        alert("User Successfully Registered!")
        
    } catch (error) {
        console.log("error in signUp", error.code);
        switch (error.code) {
          case 'auth/invalid-email':
            alert('Please enter valid E-mail!');
            break;
          case 'auth/weak-password':
            alert('Password should be atleast 7 characters!');
            break;

          default:
            break;
        }
        
    }

   

}
export const SignOutAct=()=> async (dispatch)=>{
    
    try {

        let res = await authentication.signOut()
        console.log("signup res ", res);
       
        dispatch({
            type: LOG_OUT
        })
        
    } catch (error) {
        console.log("error in signUp", error);
        alert("Something went wrong!!")
    }

   

}