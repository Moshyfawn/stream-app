import React, { Component } from "react";
import styled from "styled-components";

import NavButton from "elements/buttons/navButton";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavButton path="/" label="Stream App" />
        <NavBarList className="navbar-list">
          <NavButton path="/" label="Home" />
        </NavBarList>
      </nav>
    );
  }
}

const NavBarList = styled.div`
  & > :not(last-child) {
    margin-right: 10px;
  }
`;

export default NavBar;
