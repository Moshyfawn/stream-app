import React, { PureComponent, Fragment } from "react";
import styled, { keyframes, css } from "styled-components";
import { ifProp } from "styled-tools";

import { RecSign } from "assets";

class Dashboard extends PureComponent {
  state = {
    rec: false,
    preview: false,
    stream: {}
  };

  video = React.createRef();

  handleClick = () => {
    // getting access to webcam
    if (!this.state.rec) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(stream => {
          this.video.current.srcObject = stream;
          this.setState({ rec: true, stream: stream });
        })
        .catch(console.log);
    } else {
      // disable webcam feed
      this.state.stream.getTracks().forEach(track => track.stop());
      this.setState({ rec: !this.state.rec, stream: {} });
    }
  };

  handlePreview = () => {
    this.setState({ preview: !this.state.preview });
  };

  render() {
    const { preview, rec } = this.state;
    return (
      <Container>
        {preview === true && (
          <Fragment>
            <RecSignStyled onClick={this.handleClick} rec={rec} />
            <Video
              ref={this.video}
              autoPlay
              // controls
              poster="https://via.placeholder.com/800/600"
            />
          </Fragment>
        )}
        <button onClick={this.handlePreview}>Preview</button>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 800px;
  height: auto;
`;

const pulse = keyframes`
  0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    70% {
      opacity: 0.3;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
`;

const RecSignStyled = styled(RecSign)`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  width: 20px;
  height: auto;
  fill: black;
  overflow: visible;
  & > circle:last-child {
    fill: black;
    transform: scale(0.5);
    transform-origin: center center;
  }

  ${ifProp(
    { rec: true },
    css`
      fill: red;
      & > circle:last-child {
        animation: ${pulse} 4s linear infinite;
      }
    `
  )}
`;

export default Dashboard;
