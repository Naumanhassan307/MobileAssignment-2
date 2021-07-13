
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/Home';
import AddTask from '../../screens/addTask/AddTask';
import ShowTask from '../../screens/showTask/ShowTask';
function NavBar(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Tasker',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTask}
            options={{
              title: 'Tasker',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="ShowTask"
            component={ShowTask}
            options={{
              title: 'Tasker',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

}
export default NavBar;