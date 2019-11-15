import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import StartButton from './StartButton'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      minutes: 25,
      seconds: '00'
    }

    this.secondsRemaining = 1500
  }

  countDown = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec,
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + min,
      })
    }
    this.secondsRemaining = this.secondsRemaining - 1
  }

  startCountDown = () => {
    var timerStart = setInterval(this.countDown, 1000);
  }
  
  render(){
    return(
      <div>
        <Timer
        minutes = {this.state.minutes}
        seconds = {this.state.seconds}
        />
        <StartButton
        startCountDown = {this.startCountDown}
        />
      </div>
    )
  }
}