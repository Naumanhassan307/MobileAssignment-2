import React from "react";

import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import store from "./src/config/Store"

import NavBar from "./src/config/navigation/Navigation";
function App(){
  
  return (
    <Provider store={store}>

      <NavBar />
    </Provider>
  );
};



//make this component available to the app
export default App;
