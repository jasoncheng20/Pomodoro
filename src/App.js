import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Pomodoro.js';
import ShortBreak from './ShortBreak.js';
import LongBreak from './LongBreak.js';
import tomato from './Tomato.gif'

export default class App extends Component {
    render(){
        return(
            <div className = 'backdrop'>
                <Pomodoro/>
                <img className = "tomato" src = {tomato}/>
                <ShortBreak/>
                <LongBreak/>
            </div>
        )
    }
}