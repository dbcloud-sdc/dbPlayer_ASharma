import React, { useState } from 'react';
import styled from 'styled-components';

class SoundBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: 274,
    };
    this.handleHoverChange = this.handleHoverChange.bind(this);
    // this.handleHoverOff = this.handleHoverOff.bind(this);
  };


  handleHoverChange(event) {
    event.preventDefault();
    // event.target.style.background = 'rgb(255, 85, 0, .5)';
    this.setState({
      bar: event.target.id,
    })
    console.log(this.state.bar);
    console.log(event.target.id);
  };

  // handleHoverOff(event) {
  //   event.preventDefault();
  //   event.target.style.background = 'white';
  // };

  render() {
    const Bars = () => {
      const barArray = [];
      const barArrayBottom = [];
      for (let i = 1; i < 274; i += 1) {
        const randomNum = Math.floor(Math.random() * this.props.sound.decibel);
        barArray.push(<BarStyleSpan id={`${i}`} style={{ height: randomNum }} key={i} onMouseOver={this.handleHoverChange} />);
        barArrayBottom.push(<BarStyleSpan style={{ height: (randomNum / 2.5) }} key={i} />);
      }
      barArray.filter(el => {
        if (el.key >= this.state.bar) {
          el.props.style.background = 'orange'
        }
      })
      return [barArray, barArrayBottom];
    };
    return (
      <div>
        <div className="sound-container-top">
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
  background: white;
  margin-right: 1px;
  // &:hover {
  //   background: rgb(255, 85, 0, .5);
  // }
`;

// const SoundBar = (props) => {
//   const Bars = () => {
//     const barArray = [];
//     const barArrayBottom = [];
//     for (let i = 1; i < 274; i += 1) {
//       const randomNum = Math.floor(Math.random() * props.sound.decibel);
//       barArray.push(<BarStyleSpan style={{ height: randomNum }} key={i} />);
//       barArrayBottom.push(<BarStyleSpan style={{ height: (randomNum / 2.5) }} key={i} />);
//     }
//     return [barArray, barArrayBottom];
//   };
//   return (
//     <div>
//       <div className="sound-container-top">
//         <span className="start-time">0:00</span>
//         {Bars()[0]}
//         <span className="finish-time">2:20</span>
//       </div>
//       <div className="sound-container-bottom">
//         {Bars()[1]}
//       </div>
//     </div>
//   );
// };


// const randomNum = {this.props.sound}
// className={`Bar${randomNum}`}


export default SoundBar;
