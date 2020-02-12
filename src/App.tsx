import React, { Component } from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

// Molecules & Organism
import MainView from "./Organisms/MainView";
import CustomNavbar from "./Molecules/CustomNavbar";

export interface MyState {
  newsList: any[];
}

export default class App extends Component<{}, MyState> {
   componentDidMount() {
    
    this.getData();
  }

 getData=(url:string="https://api.hnpwa.com/v0/news/1.json")=>
  {
    console.log("inside app get data"+url);

     fetch(url)
      .then(response =>{ 
        console.log("response "+response);
     return   response.json();})
      .then(json =>{
        console.log("data "+JSON.stringify(json));
        return  this.setState({
          newsList: json
        });

      });
  }



  render() {
    if (this.state) {
      return (
        <Container fluid={true}>
          <CustomNavbar />
          <MainView data={this.state.newsList} onTabChange={this.getData} />
        </Container>
      );
    }
    return (
      <Container fluid={true}>
        <CustomNavbar />
        <div className="p-5 m-5 " style={{ textAlign: "center" }}>
          <Spinner animation="border" />
        </div>
      </Container>
    );
  }
}
