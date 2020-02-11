import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface MyProps {
  comments: number;
}

export default class App extends React.Component<MyProps, {}> {
  public render() {
    return (
      <Row>
        <Col>{this.props.comments}</Col>
      </Row>
    );
  }
}
