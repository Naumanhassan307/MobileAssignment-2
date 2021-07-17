import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAct } from "../../store/actions/AuthAction";



function useSign(){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const dispatch = useDispatch()

    const ctaLoginHandler = () => {
        console.log("email", email);
        console.log("pass", pass);

        if(email === "" || pass === ""){
            alert("Please Fill all Fields!")
            return
        }else{

            dispatch(LoginAct(email, pass))
        }

        setEmail('');
        setPass('');
    }
    
    return [setEmail, setPass, ctaLoginHandler];
}
export default useSign;