
import React from 'react';
import {Text, Button, TouchableOpacity} from "react-native"

import Icon from 'react-native-vector-icons/AntDesign';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/Home';
import AddTask from '../../screens/addTask/AddTask';
import ShowTask from '../../screens/showTask/ShowTask';

import Signin from '../../auth/signIn/SignIn';
import SignUp from '../../auth/signUp/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { SignOutAct } from '../../store/actions/AuthAction';

function NavBar(){

  const dispatch = useDispatch()

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
                  headerRight: () => (
                    <>
                      <Icon
                        name="logout"
                        size={30}
                        style={{marginRight: 10}}
                        color="#FFFFFF"
                        onPress={() => {
                          dispatch(SignOutAct());
                        }}
                      />
                    </>
                  ),
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
                  headerRight: () => (
                    <>
                      <Icon
                        name="logout"
                        size={30}
                        style={{marginRight: 10}}
                        color="#FFFFFF"
                        onPress={() => {
                          dispatch(SignOutAct());
                        }}
                      />
                    </>
                  ),
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