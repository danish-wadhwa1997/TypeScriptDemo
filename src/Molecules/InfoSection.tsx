import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Atoms
import Points from "../Atoms/Points";
import Source from "../Atoms/Source";

export default class InfoSection extends Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col xs={{ span: 5 }}>
          <Row>
            <Points /> |
            <Source />
          </Row>
        </Col>
      </Row>
    );
  }
}
