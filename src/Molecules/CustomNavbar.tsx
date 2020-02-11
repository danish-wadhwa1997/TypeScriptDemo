import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React Icons
import { MdAutorenew } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";

export default class CustomNavbar extends Component<{}, {}> {
  render() {
    return (
      <Row style={{ backgroundColor: "#fe6601" }}>
        <Col xs={{ offset: 6, span: 2 }}>
          <h2>HN</h2>
        </Col>
        <Col xs={{ span: 1, offset: 3 }}>
          <Row>
            <Col>
              <MdAutorenew />
            </Col>
            <Col>
              <FiMoreVertical />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
