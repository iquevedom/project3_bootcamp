import React, { Component } from "react";
import { Col, Row, Container } from "../../Grid";
import Jumbotron from "../../Jumbotron";

class AdminMenu extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-4">
            <Jumbotron>
              <a className="navbar-brand" href="/admin/events">Events Management</a>
            </Jumbotron>
          </Col> */}
          <Col size="md-4 sm-12">
            <Jumbotron>
              <a className="navbar-brand" href="/admin/menu">Menu Management</a>
            </Jumbotron>
          </Col>
          {/* <Col size="md-4 sm-12">
            <Jumbotron>
              <a className="navbar-brand" href="/admin/revenue">Revenue Reports</a>
            </Jumbotron>
          </Col> */}
        </Row>
      </Container>

    )
  }
}

export default AdminMenu;