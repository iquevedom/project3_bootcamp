import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap/es"

class NavAdmin extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/menu">Events</Nav.Link>
                        <Nav.Link href="/orders/find">Menus Available</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default NavAdmin;
