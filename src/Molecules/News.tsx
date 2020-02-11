import React, { Component } from "react";

// Bootstrap Components
import Col from "react-bootstrap/Col";

// Atoms
import HeadingList from "../Atoms/HeadingList";
import InfoSection from "./InfoSection";

export interface MyProps {
  heading: string;
  points: number;
  source: string;
}

export default class News extends Component<MyProps, {}> {
  render() {
    return (
      <Col xs={10}>
        <HeadingList heading={this.props.heading} />
        <InfoSection points={this.props.points} source={this.props.source} />
      </Col>
    );
  }
}
