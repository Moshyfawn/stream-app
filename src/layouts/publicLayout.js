import React, { PureComponent } from "react";
import styled from "styled-components";

class PublicLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return <Container className="public-layout-wrapper">{children}</Container>;
  }
}

const Container = styled.div`
  height: 100%;
`;

export default PublicLayout;
