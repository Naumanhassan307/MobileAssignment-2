
import { LOG_IN  ,LOG_OUT} from "../TypeConstants";

const initialState={
    isLogin: false,
    user: null
}


function AuthReducer(state = initialState, action){
    switch (action.type) {
      case LOG_IN:{
          console.log("user from action ", action.payload);
          return{
              ...state,
              isLogin: true,
              user: action.payload
          }
      }
      case LOG_OUT:{
          
          return{
              ...state,
              isLogin: false,
             
          }
      }
        

      default:
        return state;
    }
}
export default AuthReducer;