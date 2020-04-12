import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // Button,
  // Form,
} from "reactstrap";
// import FormControl from "react-bootstrap/FormControl";
export default class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      search: "",
    };
  }

  handleChangeChild = (e) => {
    console.log("e from header", e);
    //console.log("this.props", this.props);
    this.props.callbackFromParent(e);
  };

  render() {
    //toggle = () => this.setState({ isOpen: !isOpen });
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="./Profile">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="faUserCircle NavbarIcon"
            />
          </NavbarBrand>
          <NavbarBrand href="/">
            <FontAwesomeIcon icon={faHome} className="faHome NavbarIcon" />
          </NavbarBrand>
          <FontAwesomeIcon
            icon={faBars}
            className="faBars NavbarIcon"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {/* <NavLink>
                  {" "} */}
                <Link to="./">Home </Link>
                {/* </NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink>
                  {" "} */}
                <Link to="./Cities">Cities </Link>
                {/* </NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
