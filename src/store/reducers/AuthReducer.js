
import { LOG_IN } from "../TypeConstants";

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
        

      default:
        return state;
    }
}
export default AuthReducer;