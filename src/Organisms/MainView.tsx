import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Molecules
import Tabs from "../Molecules/Tabs";
import NewsDisplay from "../Molecules/NewsDisplay";

export default class MainView extends Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col>
          <Tabs />
          <NewsDisplay />
        </Col>
      </Row>
    );
  }
}
