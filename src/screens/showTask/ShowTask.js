import React, { useEffect } from 'react';

import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import useShowTask from './useShowTask';
import {ShowTaskStyles} from "./ShowTaskStyle"
function ShowTask() {
  const [ctaFetchHandler, storeTodo, ctaDeleteHandler] = useShowTask();

  useEffect(()=>{
ctaFetchHandler()
  },[])

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          marginTop: 10,
          marginBottom: 20,
        }}>
        My Tasks
      </Text>
      <ScrollView>
        {storeTodo.map(item => {
          return (
            <View
              key={item.taskId}
              style={{
                flex: 1,
                flexDirection: 'row',

                height: 45,
                width: '97%',
                margin: 5,
                backgroundColor: '#FFA500',
                borderTopEndRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  height: '100%',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#000000',
                    borderTopEndRadius: 20,
                    borderBottomRightRadius: 20,
                    color: '#FFFFFF',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    height: '100%',
                  }}>
                  <Text
                    style={{color: '#FFFFFF', padding: 5}}
                    onPress={()=>{ctaDeleteHandler(item.docId, item.taskId)}}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'left',
                  padding: 10,
                  color: '#FFFFFF',
                }}>
                {item.taskMsg}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  ); 
}

//make this component available to the ShowTask
export default ShowTask;
