import React, { PureComponent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

class NavButton extends PureComponent {
  render() {
    const { path, label } = this.props;
    return <Button to={path}>{label}</Button>;
  }
}

const Button = styled(NavLink)`
  cursor: pointer;
`;

export default NavButton;
