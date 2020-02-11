import React, { Component } from "react";

// Bootstrap components
import Col from "react-bootstrap/Col";

//Atoms
import CommentIcon from "../Atoms/CommentIcon";
import CommentsNo from "../Atoms/CommentsNo";

export default class CommentSection extends Component<{}, {}> {
  render() {
    return (
      <Col
        className="p-3"
        xs={{ span: 1, offset: 1 }}
        style={{ backgroundColor: "lightgrey", textAlign: "center" }}
      >
        <CommentIcon />

        <CommentsNo />
      </Col>
    );
  }
}
