import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";

// Molecules
import News from "./News";
import CommentSection from "./CommentSection";

export default class NewsList extends Component<{}, {}> {
  render() {
    return (
      <Row>
        <News />
        <CommentSection />
      </Row>
    );
  }
}
