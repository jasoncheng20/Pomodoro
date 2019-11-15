import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {

  render(){
    return this.props.minutes + ':' + this.props.seconds
  }
}