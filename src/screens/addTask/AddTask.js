import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import AddTaskStyles from './AddTaskStyle';
import UseAddTask from './useAddTask';

function AddTask({navigation}){
    const [setTask, ctaHandler] = UseAddTask()
    return (
      <View style={AddTaskStyles}>
        <Text> AddTask</Text>
        <TextInput placeholder="Enter your Task" onChangeText={(e)=> setTask(e)} />
        <Button title="Add-Task" onPress={ctaHandler} />
        <Text> AddTask</Text>
        <Text> AddTask</Text>
        <Text> AddTask</Text>
        <Button
          title="Go To Show Task"
          onPress={() => navigation.navigate('ShowTask')}
        />
      </View>
    );

}
export default AddTask;