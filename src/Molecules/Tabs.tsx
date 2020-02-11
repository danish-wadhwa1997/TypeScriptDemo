import React, { Component } from "react";

// Bootstrap Components
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Tabs extends Component<{}, {}> {
  render() {
    return (
      <Row style={{ backgroundColor: "#e56401" }}>
        <Col>
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Hot</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="new">New</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="show">Show</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ask">Ask</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="jobs">Jobs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    );
  }
}
