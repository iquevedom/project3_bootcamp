import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function NoPath() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoPath;
