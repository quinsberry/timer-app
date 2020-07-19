import React, { Component } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'

import { TimePicker } from '../components'

import styles from './styles'

const formatNumber = (number) => `0${number}`.slice(-2)

const getRemaining = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) }
}

export default class App extends Component {
  state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedMinutes: '0',
    selectedSeconds: '5',
  }
  interval = null

  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) this.stop()
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval)
  }

  start = () => {
    this.setState((state) => ({
      remainingSeconds: parseInt(state.selectedMinutes) * 60 + parseInt(state.selectedSeconds),
      isRunning: true,
    }))

    this.interval = setInterval(() => {
      this.setState((state) => ({
        remainingSeconds: state.remainingSeconds - 1,
      }))
    }, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
    this.interval = null
    this.setState({ remainingSeconds: 5, isRunning: false })
  }

  pickerOnChange = (type, val) => {
    if (type === 'min') {
      this.setState({ selectedMinutes: val })
    } else if (type === 'sec') {
      this.setState({ selectedSeconds: val })
    }
  }

  render() {
    const { minutes, seconds } = getRemaining(this.state.remainingSeconds)

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        ) : (
          <TimePicker
            onChange={this.pickerOnChange}
            defaultMin={this.state.selectedMinutes}
            defaultSec={this.state.selectedSeconds}
          />
        )}
        {this.state.isRunning ? (
          <TouchableOpacity onPress={this.stop} style={[styles.button, styles.buttonStop]}>
            <Text style={[styles.buttonText, styles.buttonStopText]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.start} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}
