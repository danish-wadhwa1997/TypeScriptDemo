import React, { Component } from "react";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Molecules
import Tabs from "../Molecules/Tabs";
import NewsDisplay from "../Molecules/NewsDisplay";

export interface MyProps {
  data: any[],
  onTabChange:(url:string)=>void
}

export default class MainView extends Component<MyProps, {}> {
  
  justTest=(url:string)=>{
    console.log("reached main view");
    this.props.onTabChange(url);
  }
  
  render() {
    return (
      <Row>
        <Col>
          <Tabs onTabChangeChild={this.justTest} />
          <NewsDisplay news={this.props.data} />
        </Col>
      </Row>
    );
  }
}
