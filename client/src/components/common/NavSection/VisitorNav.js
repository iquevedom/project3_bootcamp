import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap/es"

class NavSection extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">The BIG Eats Eatery</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        {/* <Nav.Link href="/orders">Order</Nav.Link> */}
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default NavSection;
