import React, { Component } from "react";
import { FaComments } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class CommentIcon extends Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col>
          <FaComments />
        </Col>
      </Row>
    );
  }
}
