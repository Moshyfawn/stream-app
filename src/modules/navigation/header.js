import React, { PureComponent } from "react";
import styled from "styled-components";

import NavBar from "./navBar";

class Header extends PureComponent {
  render() {
    return (
      <Container className="header">
        <NavBar />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 40px;
  padding: 20px 30px;
  background-color: lightgray;
`;

export default Header;
