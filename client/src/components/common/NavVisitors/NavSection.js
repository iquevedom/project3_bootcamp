
import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

class NavSection extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link href="/admin/menu">Administrator</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default NavSection;
