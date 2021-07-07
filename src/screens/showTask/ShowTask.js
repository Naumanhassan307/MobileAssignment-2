import React from 'react';
import {View, Text, Button} from 'react-native';

import ShowTaskStyles from "./ShowTaskStyle";
import UseShowTask from './UseShowTask';

function ShowTask({navigation}) {
  const [store, ctaRemoveHandler] = UseShowTask();
  return (
    <View style={ShowTaskStyles}>
      <Text> ShowTask</Text>

      {
        store.map((item)=>{
          return (
            <View>
              <Text>
                {item.myTask}{' '}
                <Button title="Remove" onPress={()=>{ctaRemoveHandler(item.myId)}} />
              </Text>
            </View>
          );
        })
      }
      <Button
        title="Go To Add Task"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
}
export default ShowTask;
