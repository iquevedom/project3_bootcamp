import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarDropdown,
  Button,
  NavbarLink
} from "bloomer";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Nav>
      <NavbarBrand>
        <NavbarItem>
          <h1>Restaurant App!</h1>
        </NavbarItem>

        <NavbarBurger onClick={() => setMenuOpen(!menuOpen)} />
      </NavbarBrand>

      <NavbarMenu isActive={menuOpen}>
        <NavbarStart>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="navbar-item"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/documentation"
            className="navbar-item"
          >
            Customer Menu
          </Link>
          <NavbarItem hasDropdown isHoverable style={{ padding: 0 }}>
            <NavbarLink>Examples</NavbarLink>
            <NavbarDropdown>
              <Link
                style={{ height: "100%" }}
                onClick={() => setMenuOpen(false)}
                to="/react-examples"
                className="navbar-item"
              >
                Help
              </Link>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <div className="buttons">
              <Button onClick={props.signUpModal} isColor="primary">
                <strong>Sign up</strong>
              </Button>
              <Button onClick={props.loginModal} isColor="light">
                Log in
              </Button>
            </div>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Nav>
  );
}

export default Navbar;
