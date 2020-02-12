import React, { Component } from "react";

// Bootstrap Components
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface MyProps{
  onTabChangeChild:(url:string)=>void
}

export default class Tabs extends Component<MyProps, {}> {
  getTab=(event:any)=>{
  let name:string=event.target.text;

  let url:string;
    switch(name)
    {
      case "New":
        url="https://api.hnpwa.com/v0/newest/1.json";
          break;
          case "Show":
        url="https://api.hnpwa.com/v0/show/1.json";
          break;
          case "Ask":
        url="https://api.hnpwa.com/v0/ask/1.json";
          break;
          case "Jobs":
        url="https://api.hnpwa.com/v0/jobs/1.json";
          break;

          default:
            url="https://api.hnpwa.com/v0/news/1.json"
    }
    this.props.onTabChangeChild(url);
        
    
  }
  
  render() {

    return (
      <Row style={{ backgroundColor: "#e56401" }}>
        <Col>
          <Nav justify variant="tabs" defaultActiveKey="/home" onClick={this.getTab}>
            <Nav.Item>
              <Nav.Link href="/home" >Hot</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="new" >New</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="show">Show</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ask">Ask</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="jobs">Jobs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    );
  }
}
