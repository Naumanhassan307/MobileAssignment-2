

import React from 'react';
import {View, Text, TextInput} from "react-native";
import Button from "../../constant/button/Button"

import SignUpStyle from './SignUpStyle';

function SignUp() {
  return (
    <View style={SignUpStyle.mainDiv}>
      <View style={SignUpStyle.mainDiv1}>
        <Text
          style={{
            
            fontSize: 45,
          }}>
          Tasker
        </Text>
      </View>
      <View style={SignUpStyle.mainDiv2}>
        <TextInput
          placeholder="Enter Your Name"
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: '90%',
            height: 55,
            padding: 15,
            margin: 5,
            fontSize: 20,
          }}
        />
        <TextInput
          placeholder="Enter E-mail"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: '90%',
            height: 55,
            padding: 15,
            margin: 15,
            fontSize: 18,
          }}
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: '90%',
            height: 55,
            padding: 15,
            margin: 5,
            fontSize: 18,
          }}
        />
      </View>
      <View style={SignUpStyle.mainDiv3}>

      <Button title="Signup" />
      <Button title="Login" />
      </View>
    </View>
  );
}


export default SignUp;
