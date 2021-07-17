
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { SignUpAct } from '../../store/actions/AuthAction';


function useSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch()

  const ctaSignUpHandler = () =>{
      if(name === "" || email === "" || pass === ""){
          alert("Please Fill All Fields!")
          return
      }else{
          let newObj ={
              userName: name,
              userEmail: email,
              userPass: pass
          }
          dispatch(SignUpAct(newObj, email, pass));
         
      }
  }
 

  
  return [setName, setEmail, setPass, ctaSignUpHandler];
}
export default useSignUp;
