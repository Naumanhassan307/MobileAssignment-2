import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
import {View, Text} from "react-native"



function Date(){
    
    return (
      <View>
        <Text> Date Component</Text>
        <Calendar
          theme={{
            textSectionTitleDisabledColor: '#d9e1e8',
          }}
          markedDates={{
            ...this.getDisabledDates('2012-05-01', '2012-05-30', [0, 6]),
          }}
          disabledDaysIndexes={[0, 6]}
        />
      </View>
    );
}
export default Date;