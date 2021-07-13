import React from 'react';

import {HomeStyles} from './HomeStyle';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import useHome from './useHome';
function Home({navigation}) {

    const [setTask, ctaAddHandler] = useHome();
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.container1}>
        <Text>.</Text>
      </View>
      <View style={HomeStyles.container2}>
        <View style={HomeStyles.container2Div1}>
          <TextInput
            placeholder="Enter Task..."
            style={{
              borderWidth: 1,
              borderRadius: 20,
              width: '90%',
              height: 50,
              padding: 15,
              margin: 5,
              fontSize: 18,
            }}
            onChangeText={(e)=>{setTask(e);}}
          />
        </View>
        <View style={HomeStyles.container2Div2}>
          <TouchableOpacity style={HomeStyles.container2Div1btn} onPress={ctaAddHandler}>
            <Text style={{color: '#FFFFFF', fontSize: 22}}>
              + Add a New Task
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={HomeStyles.container2Div2btn}
            onPress={() => navigation.navigate('ShowTask')}>
            <Text style={{color: '#FFFFFF', fontSize: 22}}>ShowTask</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
