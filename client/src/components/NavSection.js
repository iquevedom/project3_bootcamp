import React from "react";
import { Nav } from "react-bootstrap";

export default function NavSection() {
    return (
        <>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}