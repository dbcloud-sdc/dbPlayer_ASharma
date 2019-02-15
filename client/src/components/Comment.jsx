import React from 'react';
import styled from 'styled-components';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const CommentImage = () => {
      const imgArray = [];
      for (let i = 1; i < 21; i += 1) {
        imgArray.push(<CommentSpan
          key={i}
          style={{ backgroundImage: `url(${this.props.random[i]})` }}
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
