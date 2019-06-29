import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap/es"

class NavSection extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/admin">Home Control Panel</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/revenue">Revenue Reports</Nav.Link> */}
                        {/*   <Nav.Link href="/orders/find">Orders</Nav.Link> */}
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default NavSection;
