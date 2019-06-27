import React, {Component} from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Welcome admin!</h1>
            <p style={{ maxWidth: 600, margin: "auto" }}>
              This is the main page for management of the bussiness.
          </p>
          </Row>
        </Container>
      </div>
    );
  };
}

export default AdminHome;
