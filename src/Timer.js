import { Component } from 'react';
import './Timer.css';

// Responsible for display of timer component in minutes:seconds
export default class Timer extends Component {

  render(){
    return this.props.minutes + ':' + this.props.seconds
  }
}