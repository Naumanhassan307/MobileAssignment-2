//import liraries
import React, { Component } from 'react';
import { View, Text,} from 'react-native';
import AddTask from './src/screens/addTask/AddTask';
import ShowTask from './src/screens/showTask/ShowTask';

// create a component
const App = () => {
  return (
    <View>
      {/* <AddTask /> */}
      <ShowTask />
    </View>
  );
};



//make this component available to the app
export default App;
