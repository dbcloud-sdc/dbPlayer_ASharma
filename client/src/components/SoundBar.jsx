import React from 'react';
import styled from 'styled-components';

class SoundBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: 274,
      randomNum: [],
    };
    this.handleHoverChange = this.handleHoverChange.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }


  componentDidMount() {
    for (let i = 1; i < 275; i += 1) {
      const randomNum = () => Math.floor(Math.random() * this.props.sound.decibel);
      this.setState(state => state.randomNum.push(randomNum()));
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
          isHovered={Boolean(this.state.bar <= i)}
        />);
        barArrayBottom.push(<BarStyleSpan
          style={{ height: (this.state.randomNum[i] / 2.5) }}
          key={i}
          onMouseEnter={() => { this.handleHoverChange(i); }}
          isHovered={Boolean(this.state.bar <= i)}
        />);
      }
      return [barArray, barArrayBottom.reverse()];
    };
    return (
      <div>
        <div className="sound-container-top" onMouseLeave={this.handleLeave}>
          <span className="start-time">0:00</span>
          {Bars()[0]}
          <span className="finish-time">2:20</span>
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
