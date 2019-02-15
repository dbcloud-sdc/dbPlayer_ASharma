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
          style={{ backgroundImage: `url(${this.props.img.imgurl})` }}
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
  // position: absolute;
  // margin-right: 40px;
  justify-content: space-between;
`;

{/* <img className="image" src={props.img.imgurl} alt="" /> */}

export default Comment
