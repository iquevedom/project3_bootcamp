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
  NavbarLink,
  Button
} from "bloomer";

function AuthNavbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Nav>
      <NavbarBrand>
        <NavbarItem>
          <h1>Restaurant App</h1>
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
            Events
          </Link>
          <NavbarItem hasDropdown isHoverable style={{ padding: 0 }}>
            <NavbarLink>Admin</NavbarLink>
            <NavbarDropdown>
              <Link
                style={{ height: "100%" }}
                onClick={() => setMenuOpen(false)}
                to="/react-examples"
                className="navbar-item"
              >
                Management
              </Link>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem hasDropdown isHoverable style={{ padding: 0 }}>
            <NavbarLink>Welcome !</NavbarLink>
            <NavbarDropdown>
              <Button onClick={props.signOut} isColor="light">
                Log Out
              </Button>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Nav>
  );
}

export default AuthNavbar;
