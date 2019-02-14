import React, { useState } from 'react';
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

  // componentDidMount() {
  //   this.test();
  // }

  componentDidMount() {
    for (let i = 1; i < 274; i += 1) {
      console.log('in componentedidmount', this.props.sound);
      // const randomNum = Math.floor(Math.random() * this.props.sound.decibel);
      this.setState(state => state.randomNum.push(Math.floor(Math.random() * 80)));
    }
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (!_.isEqual(prevProps, this.props)) {
  //     for (let i = 1; i < 274; i += 1) {
  //       // const randomNum = () => Math.floor(Math.random() * this.props.sound.decibel);
  //       this.setState(state => state.randomNum.push(Math.floor(Math.random() * 20)));
  //     }
  //   }
  // }

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
    console.log('in render', this.props.sound);
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

// class SoundBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bar: 274,
//     };
//     this.handleHoverChange = this.handleHoverChange.bind(this);
//     // this.handleHoverOff = this.handleHoverOff.bind(this);
//   }

//   handleHoverChange(event) {
//     event.preventDefault();
//     // event.target.style.background = 'rgb(255, 85, 0, .5)';
//     this.setState({
//       bar: Number(event.props.id),
//     });
//     console.log('this is target id', event.target.id)
//     console.log('this is state of bar', this.state.bar)
//   };

//   // handleHoverOff(event) {
//   //   event.preventDefault();
//   //   event.target.style.background = 'white';
//   // };

//   render() {
//     const Bars = () => {
//       const barArray = [];
//       const barArrayBottom = [];
//       let count = 0;
//       for (let i = 1; i < 274; i += 1) {
//         const randomNum = Math.floor(Math.random() * this.props.sound.decibel);
//         barArray.push(<span className="top" id={`${i}`} style={{ height: randomNum }} key={i} onMouseOver={() => count += i} />);
//         barArrayBottom.push(<span className="top" style={{ height: (randomNum / 2.5) }} key={i} />);
//       }
//       barArray.filter(el => {
//         if (el.props.id <= count) {
//           el.props.style.background = 'orange'
//         } else {
//           el.props.style.background = 'white'
//         }
//       })
//       return [barArray, barArrayBottom];
//     };
//     return (
//       <div>
//         <div className="sound-container-top">
//           <span className="start-time">0:00</span>
//           {Bars()[0]}
//           <span className="finish-time">2:20</span>
//         </div>
//         <div className="sound-container-bottom">
//           {Bars()[1]}
//         </div>
//       </div>
//     );
//   }
// }

const BarStyleSpan = styled.span`
  width: 2.5px;
  background: ${props => (props.isHovered ? 'rgb(255, 85, 0, .5)' : 'white')};
  margin-right: 1px;
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
