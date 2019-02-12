import React from 'react';
import styled from 'styled-components';

// class SoundBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//     this.props.sound.decibel = this.props.sound.decibel.bind(this);
//   }

//   render() {
//     const Bars = () => {
//       let barArray = [];
//       for (let i = 1; i < 200; i++) {
//         // const randomNum = Math.floor(Math.random() * 10);
//         barArray.push(<span key={i} ></span>)
//       }
//       return barArray;
//     }
//     return (
//       <div className="sound-container">
//         <BarStyle sound={this.props.sound.decibel}>
//           {Bars()}
//         </BarStyle>
//       </div>
//     );
//   }
// }

const SoundBar = (props) => {
  const Bars = () => {
    const barArray = [];
    for (let i = 1; i < 200; i++) {
      const randomNum = Math.floor(Math.random() * props.sound.decibel);
      barArray.push(<BarStyleSpan style={{ height: randomNum }} key={i} />);
    }
    return barArray;
  };
  return (
    <div className="sound-container">
      {Bars()}
    </div>
  );
};

// const randomNum = {this.props.sound}
// className={`Bar${randomNum}`}

const BarStyleSpan = styled.span`
  width: 4px;
  background: white;
  margin-right: 1px;
`;

export default SoundBar;
