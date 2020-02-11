import React, { Component } from "react";

// Bootstrap Components
import Col from "react-bootstrap/Col";

export interface MyProps {
  points: number;
}

export default class Points extends Component<MyProps, {}> {
  render() {
    return <Col style={{ textAlign: "right" }}>{this.props.points} points</Col>;
  }
}
