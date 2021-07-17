import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../constant/button/Button';

import SigninStyle from './SigninStyle';
import useSign from './useSign';

function Signin({navigation}) {

  const [setEmail, setPass, ctaLoginHandler] = useSign();
  return (
    <View style={SigninStyle.mainDiv}>
      <View style={SigninStyle.mainDiv1}>
        <Text
          style={{
            color: '#FFA500',
            fontSize: 45,
          }}>
          Tasker
        </Text>
      </View>
      <View style={SigninStyle.mainDiv2}>
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
      <View style={SigninStyle.mainDiv3}>
        <Button title="Login" onPress={ctaLoginHandler} />
        <Button
          title="+ Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
}

export default Signin;
