import React, { Component } from "react";

// Bootstrap Components

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Molecules Lists
import NewsList from "./NewsList";

export interface MyProps {
  news: any[];
}

export default class NewsDisplay extends Component<MyProps, {}> {
  render() {
    return (
      <Row>
        <Col>
          {this.props.news.map(news1 => (
            <NewsList
              key={news1["id"]}
              heading={news1["title"]}
              points={news1["points"]}
              comment={news1["comments_count"]}
              source={news1["domain"]}
            />
          ))}
        </Col>
      </Row>
    );
  }
}
