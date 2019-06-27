import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Cards from "../components/Card";

class NavSection extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default NavSection;