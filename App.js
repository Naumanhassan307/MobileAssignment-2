import React from "react";

import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import store from "./src/config/Store"

import NavBar from "./src/config/navigation/Navigation";
import Date from "./src/screens/date/Date";
import SignUp from "./src/auth/signUp/SignUp";
import Signin from "./src/auth/signIn/SignIn";
function App(){
  
  return (
    <Provider store={store}>

      {/* <NavBar /> */}
      {/* <Date /> */}
      {/* <SignUp /> */}
      <Signin />
    </Provider>
  );
};



//make this component available to the app
export default App;
