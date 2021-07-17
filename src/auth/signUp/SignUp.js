

import React from 'react';
import {View, Text, TextInput} from "react-native";
import Button from "../../constant/button/Button"

import SignUpStyle from './SignUpStyle';
import useSignUp from './useSignUp';

function SignUp() {

  const [setName, setEmail, setPass, ctaSignUpHandler] = useSignUp();
  return (
    <View style={SignUpStyle.mainDiv}>
      <View style={SignUpStyle.mainDiv1}>
        <Text
          style={{
            color: '#FFA500',
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
          onChangeText={e => {
            setName(e);
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
          onChangeText={e => {
            setEmail(e);
          }}
        />
        <TextInput
          placeholder="Password (Atleast 7 characters )"
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
          onChangeText={e => {
            setPass(e);
          }}
        />
      </View>
      <View style={SignUpStyle.mainDiv3}>
        <Button title="Signup" onPress={ctaSignUpHandler} />
      </View>
    </View>
  );
}


export default SignUp;
