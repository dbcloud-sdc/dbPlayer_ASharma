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
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
    const randomNum = () => Math.floor(Math.random() * 10);
    this.setState({
      commentCount: randomNum(),
    });
  }

  handleHoverChange(index) {
    this.setState({
      display: index,
    });
  }

  handleLeave() {
    this.setState({
      display: 0,
    });
  }

  render() {
    const CommentImage = () => {
      const imgArray = [];
      for (let i = 1; i < this.state.commentCount; i += 1) {
        imgArray.push(
          <CommentDiv
            key={i}
            style={{ backgroundImage: `url(${this.props.random[i]})` }}
            onMouseEnter={() => this.handleHoverChange(i)}
            onMouseLeave={() => this.handleLeave()}
            isHovered={Boolean(this.state.display) >= i}
          >
            <CommentSpan isHovered={Boolean(this.state.display) >= i}>
              {this.props.info.comment}
            </CommentSpan>
            <NameSpan isHovered={Boolean(this.state.display) >= i}>
              {this.props.info.artistname}
            </NameSpan>
          </CommentDiv>,
        );
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

const CommentDiv = styled.div`
  width: 22px;
  height: 22px;
  justify-content: space-between;
`;

const CommentSpan = styled.span`
  color: white;
  font-size: 10px;
  position: absolute;
  right: 77%
  top: 100%;
  margin-top: 10px;
  margin-left: 34px;
  visibility: ${props => (props.isHovered ? 'visible' : 'hidden')}
`;

const NameSpan = styled.span`
  color: #f50;
  font-size: 10px;
  position: absolute;
  top: 100%;
  margin-top: 10px;
  visibility: ${props => (props.isHovered ? 'visible' : 'hidden')}
`;

// visibility: ${props => (props.isHovered ? 'visible' : 'hidden')}

export default Comment;


// add text / username from random data
// if hover is true color will = black if false color will be clear or whatever
// can add conditional for timestamp as well

// to get random number of comments.  generate a random number between 1-22 and put it in place of i < blank on span tage generation.  try it at 100 and see how it looks.  maybe they naturally overlap
