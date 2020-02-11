import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Atoms
import Points from "../Atoms/Points";
import Source from "../Atoms/Source";

export interface MyProps {
  points: number;
  source: string;
}

export default class InfoSection extends Component<MyProps, {}> {
  render() {
    return (
      <Row>
        <Col xs={{ span: 5 }}>
          <Row>
            <Points points={this.props.points} /> |
            <Source source={this.props.source} />
          </Row>
        </Col>
      </Row>
    );
  }
}
