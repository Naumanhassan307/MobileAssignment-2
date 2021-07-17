
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/Home';
import AddTask from '../../screens/addTask/AddTask';
import ShowTask from '../../screens/showTask/ShowTask';

import Signin from '../../auth/signIn/SignIn';
import SignUp from '../../auth/signUp/SignUp';
import { useSelector } from 'react-redux';

function NavBar(){

  const isLogin = useSelector(store => store.AuthReducer.isLogin);
  console.log("login detail is ", isLogin);
  // const isLogin = true;
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLogin ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  title: 'Add Task',

                  headerStyle: {
                    backgroundColor: '#000000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'left',
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
                  title: 'Show Tasks',
                  headerStyle: {
                    backgroundColor: '#000000',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{title: 'Create Account'}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );

}
export default NavBar;