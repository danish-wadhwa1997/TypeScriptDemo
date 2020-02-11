import React, { Component } from "react";

// Bootstrap Components
import Col from "react-bootstrap/Col";

// Atoms
import HeadingList from "../Atoms/HeadingList";
import InfoSection from "./InfoSection";

export default class News extends Component<{}, {}> {
  render() {
    return (
      <Col xs={10}>
        <HeadingList />
        <InfoSection />
      </Col>
    );
  }
}
