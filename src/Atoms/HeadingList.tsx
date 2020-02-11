import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface MyProps {
  heading: string;
}

export default class HeadingList extends Component<MyProps, {}> {
  render() {
    return (
      <Row className="">
        <Col className="m-3">
          <h4>{this.props.heading}</h4>
        </Col>
      </Row>
    );
  }
}
