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
            isHovered={Boolean(this.state.display === i)}
          >
            <CommentSpan isHovered={Boolean(this.state.display === i)}>
              {this.props.info[i]}
            </CommentSpan>
            <NameSpan isHovered={Boolean(this.state.display === i)}>
              {this.props.name[i]}
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
  top: 100%;
  margin-top: 10px;
  margin-left: 34px;
  padding-left: 7%;
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

export default Comment;
