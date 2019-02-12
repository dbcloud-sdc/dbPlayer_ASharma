import React from 'react';
import styled from 'styled-components';

class SoundBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const Bars = () => {
      let barArray = [];
      for (let i = 1; i < 200; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        barArray.push(<span className={`Bar${randomNum}`} key={i} ></span>)
      }
      return barArray;
    }
    return (
      <div className="sound-container">
        {Bars()}
      </div>
    );
  }
}

// const randomNum = {this.props.sound}

// const BarStyle = styled.div`
//   width: 4px;
//   height: 80px;
//   background: white;
//   margin-right: 1px;
// `;

export default SoundBar;
