import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Molecules
import Tabs from "../Molecules/Tabs";
import NewsDisplay from "../Molecules/NewsDisplay";

export interface MyProps {
  data: any[];
}

export default class MainView extends Component<MyProps, {}> {
  render() {
    console.log(this.props.data);
    return (
      <Row>
        <Col>
          <Tabs />
          <NewsDisplay news={this.props.data} />
        </Col>
      </Row>
    );
  }
}
