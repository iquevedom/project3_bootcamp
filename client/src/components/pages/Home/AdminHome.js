import React from "react";
import {Container, Row, Col, Navbar} from "react-bootstrap";

function AdminHome(props) {
  return (
    <div>
      <Container>
        <Row>
          <Title>Welcome admin!</Title>
          <p style={{ maxWidth: 600, margin: "auto" }}>
            This is the main page for management of the bussiness.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default AdminHome;
