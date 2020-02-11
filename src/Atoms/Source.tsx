import React, { Component } from "react";

// Bootstrap Components
import Col from "react-bootstrap/Col";

export interface MyProps {
  source: string;
}

export default class Source extends Component<MyProps, {}> {
  render() {
    return <Col style={{ textAlign: "left" }}>{this.props.source}</Col>;
  }
}
