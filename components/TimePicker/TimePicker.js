import React from 'react'
import { StyleSheet, View, Picker, Text, Platform } from 'react-native'

const createArray = (length) => {
  const arr = []
  let i = 0
  while (i < length) {
    arr.push(i.toString())
    i++
  }
  return arr
}

const AVAILABLE_MINUTES = createArray(10)
const AVAILABLE_SECONDS = createArray(60)

const TimePicker = ({ onChange, defaultMin, defaultSec }) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={defaultMin}
        onValueChange={(val) => onChange('min', val)}
        mode="dropdown">
        {AVAILABLE_MINUTES.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>minutes</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={defaultSec}
        onValueChange={(val) => onChange('sec', val)}
        mode="dropdown">
        {AVAILABLE_SECONDS.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: '#07121B',
        marginLeft: 10,
      },
    }),
  },
  pickerItem: {
    color: '#fff',
    fontSize: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginBottom: 20,
      },
    }),
  },
})

export default TimePicker
