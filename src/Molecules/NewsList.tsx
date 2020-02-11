import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";

// Molecules
import News from "./News";
import CommentSection from "./CommentSection";

export interface MyProps {
  heading: string;
  points: number;
  comment: number;
  source: string;
}

export default class NewsList extends Component<MyProps, {}> {
  render() {
    return (
      <Row>
        <News
          heading={this.props.heading}
          points={this.props.points}
          source={this.props.source}
        />
        <CommentSection comments={this.props.comment} />
      </Row>
    );
  }
}
