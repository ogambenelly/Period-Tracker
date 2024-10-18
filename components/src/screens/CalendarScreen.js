import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{Calendar} from "react-native-calendars"
import { ScreenContainer } from 'react-native-screens'

const CalendarScreen = () => {
const handleFitnessCheck = () => {
    Alert.alert("fitness check, log in your fitness activity")

} 
  return (
    <View>
        <Calendar 
        onPress={(day) => console.log('Selected day', day)}
        markedDates={{
            '2024-10-17' :{ marked: true, dotcolor: 'red'},
        }}
        />
        <Button title="FitnessCheck" onPress={handleFitnessCheck}/>
    </View>
  )
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    },
})

