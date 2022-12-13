import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  Start = () => {
    this.timeInterval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }, 1000)

    this.setState({isTimeRunning: true})
  }

  Stop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  Reset = () => {
    clearInterval(this.timeInterval)

    this.setState({isTimeRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state

    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state

    const Minutes = Math.floor(timeElapsedInSeconds / 60)

    if (Minutes < 10) {
      return `0${Minutes}`
    }

    return Minutes
  }

  render() {
    const {isTimeRunning, timeElapsedInSeconds} = this.state
    console.log(isTimeRunning, timeElapsedInSeconds)

    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="App-container">
        <div className="Stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="Timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{time}</h1>
            <div className="timer-btn-container">
              <button
                className="start-btn button"
                type="button"
                onClick={this.Start}
              >
                Start
              </button>
              <button
                className="stop-btn button"
                type="button"
                onClick={this.Stop}
              >
                Stop
              </button>
              <button
                className="reset-btn button"
                type="button"
                onClick={this.Reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
