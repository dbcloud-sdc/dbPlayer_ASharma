import React from 'react';
import styled from 'styled-components';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      commentCount: 0,
    };
    this.handleHoverChange = this.handleHoverChange.bind(this);
  }

  componentDidMount() {
    const randomNum = () => Math.floor(Math.random() * 60) + 20;
    this.setState({
      commentCount: randomNum(),
    });
  }

  handleHoverChange(index) {
    this.setState({
      display: index,
    });
  }

  render() {
    const CommentImage = () => {
      const imgArray = [];
      for (let i = 1; i < this.state.commentCount; i += 1) {
        imgArray.push(<CommentSpan
          key={i}
          style={{ backgroundImage: `url(${this.props.random[i]})` }}
          onMouseEnter={() => this.handleHoverChange(i)}
        />);
      }
      return imgArray;
    };
    return (
      <div className="comment-container">
        {CommentImage()}
      </div>
    );
  }
}

const CommentSpan = styled.span`
  width: 22px;
  height: 22px;
  justify-content: space-between;
`;

export default Comment;


// add text / username from random data
// if hover is true color will = black if false color will be clear or whatever
// can add conditional for timestamp as well

// to get random number of comments.  generate a random number between 1-22 and put it in place of i < blank on span tage generation.  try it at 100 and see how it looks.  maybe they naturally overlap
