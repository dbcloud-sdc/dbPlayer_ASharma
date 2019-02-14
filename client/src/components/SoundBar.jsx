import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

class SoundBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: 274,
      randomNum: [],
      seconds: 0,
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
    // const songTime = moment.utc(this.props.sound.songlength * 1000).format('m:ss');
    // console.log(songTime)
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
      bar: 274,
    });
  }

  // handleTime(index) {
  //   if (this.state.seconds <= (index / 4.56)) {
  //     this.style={ background: 'orange' };
  //   }
  // }

  render() {
    const Bars = () => {
      const barArray = [];
      const barArrayBottom = [];
      for (let i = 1; i < 274; i += 1) {
        barArray.push(<BarStyleSpan
          id={`${i}`}
          style={{ height: this.state.randomNum[i] }}
          key={i}
          timeStamp={i / 4.56}
          onMouseEnter={() => { this.handleHoverChange(i); }}
          isHovered={Boolean(this.state.bar <= i)}
        />);
        barArrayBottom.push(<BarStyleSpan
          style={{ height: (this.state.randomNum[i] / 2.5) }}
          key={i}
          timeStamp={i / 4.56}
          onMouseEnter={() => { this.handleHoverChange(i); }}
          isHovered={Boolean(this.state.bar <= i)}
        />);
      }
      return [barArray, barArrayBottom.reverse()];
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
  background: ${props => (props.isHovered ? 'rgb(255, 85, 0, .5)' : 'white')};
  margin-right: 1px;
`;

export default SoundBar;
