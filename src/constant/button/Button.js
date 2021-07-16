

//import liraries
import React from 'react';
import {  Text,  TouchableOpacity } from 'react-native';

// create a component
const Button = ({cta, title}) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
          width: '95%',
          height: 60,
          margin: 10,
          color: '#FFFFFF',
          borderRadius: 20,
        }}
        cta={cta}>
        <Text style={{color: '#FFFFFF', fontSize: 22}}>{title}</Text>
      </TouchableOpacity>
    );
};

// define your styles

export default Button;
