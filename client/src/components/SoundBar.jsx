import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
class SoundBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: 0,
      randomNum: [],
      seconds: 0,
      timePast: false,
    };
    this.handleHoverChange = this.handleHoverChange.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }


  componentDidMount() {
    for (let i = 1; i < 275; i += 1) {
      const randomNum = () => Math.floor(Math.random() * this.props.sound.decibel);
      this.setState(state => state.randomNum.push(randomNum()));
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  tick() {
    if (this.props.play && this.state.seconds < this.props.sound.songlength) {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }
  }

  handleHoverChange(index) {
    this.setState({
      bar: index,
    });
  }

  handleLeave() {
    this.setState({
      bar: 0,
    });
  }

  render() {
    const Bars = () => {
      const barArray = [];
      const barArrayBottom = [];
      for (let i = 1; i < 274; i += 1) {
        barArray.push(<BarStyleSpan
          id={`${i}`}
          style={{ height: this.state.randomNum[i] }}
          key={i}
          onMouseEnter={() => { this.handleHoverChange(i); }}
          isHovered={Boolean(this.state.bar >= i)}
          isComplete={Boolean(this.state.seconds >= (i * 2.56))}
        />);
        barArrayBottom.push(<BarStyleSpan
          style={{ height: (this.state.randomNum[i] / 2.5) }}
          key={i}
          onMouseEnter={() => { this.handleHoverChange(i); }}
          isHovered={Boolean(this.state.bar >= i)}
          isComplete={Boolean(this.state.seconds >= (i * 2.56))}
        />);
      }
      return [barArray.reverse(), barArrayBottom];
    };
    const songTime = moment.utc(this.props.sound.songlength * 1000).format('m:ss');
    const startTime = moment.utc(this.state.seconds * 1000).format('m:ss');
    return (
      <div>
        <div className="sound-container-top" onMouseLeave={this.handleLeave}>
          <span className="start-time">{startTime}</span>
          {Bars()[0]}
          <span className="finish-time">{songTime}</span>
        </div>
        <div className="sound-container-bottom">
          {Bars()[1]}
        </div>
      </div>
    );
  }
}

const BarStyleSpan = styled.span`
  width: 2.5px;
  background: ${props => (props.isComplete ? '#f50' 
  : props.isHovered ? 'rgb(255, 85, 0, .5)'
  : props.isHovered && props.isComplete ? 'rgb(255, 85, 0, .5)' 
  : 'white')};
  margin-right: 1px;
`;

export default SoundBar;
