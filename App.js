import React from "react";

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import AddTask from "./src/screens/addTask/AddTask";
import ShowAddTask from "./src/screens/showTask/ShowTask"
import { Provider } from "react-redux";
import store from "./src/config/Store"

function App(){
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="ShowTask" component={ShowAddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};



//make this component available to the app
export default App;
