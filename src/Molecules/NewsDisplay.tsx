import React, { Component } from "react";

// Bootstrap Components

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Molecules Lists
import NewsList from "./NewsList";

export default class NewsDisplay extends Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col>
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
        </Col>
      </Row>
    );
  }
}
