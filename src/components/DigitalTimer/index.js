// Write your code here
import {Component} from 'react'
import './index.css'

const playUrl = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const pauseUrl = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'

class DigitalTimer extends Component {
  state = {
    isRun: false,
    timeInMinute: 25,
    timeInSecond: 0,
  }

  onClickPlusBtn = () => {
    this.setState(prev => ({timeInMinute: prev.timeInMinute + 1}))
  }

  onClickMinusBtn = () => {
    this.setState(prev => ({timeInMinute: prev.timeInMinute - 1}))
  }

  onClickStartBtn = () => {
    this.setState(prev => ({isRun: !prev.isRun}))
  }

  onClickResetBtn = () => {
    // const {isRun, timeInMinute, timeInSecond} = this.state

    this.setState({isRun: false, timeInMinute: 25})
  }

  render() {
    const {isRun, timeInMinute, timeInSecond} = this.state

    return (
      <div className="main">
        <h1>Digital Timer</h1>
        <div className="card">
          <div className="timer-bg">
            <div>
              <h1 className="time">
                {timeInMinute}:{timeInSecond}
              </h1>
              <p className="time-status">{isRun ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="set-time-card">
            <div>
              <button type="button" onClick={this.onClickStartBtn}>
                <img
                  src={isRun ? pauseUrl : playUrl}
                  alt={isRun ? 'pause icon' : 'play icon'}
                />
                <p>{isRun ? 'Pause' : 'Start'}</p>
              </button>
              <button type="button" onClick={this.onClickResetBtn}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p>Reset</p>
              </button>
            </div>
            <p className="text">Set Timer Limit</p>
            <div className="setting">
              <button type="button" onClick={!isRun && this.onClickMinusBtn}>
                -
              </button>
              <p>{timeInMinute}</p>
              <button type="button" onClick={!isRun && this.onClickPlusBtn}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
