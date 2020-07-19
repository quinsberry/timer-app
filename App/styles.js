import { Dimensions, StyleSheet } from 'react-native'

const screen = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    borderWidth: 8,
    borderColor: '#89AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStop: {
    borderColor: '#ff851b',
  },
  buttonText: {
    fontSize: 45,
    color: '#89AAFF',
  },
  buttonStopText: {
    color: '#ff851b',
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
  },
})
