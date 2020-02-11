import React, { Component } from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

// Molecules & Organism
import MainView from "./Organisms/MainView";
import CustomNavbar from "./Molecules/CustomNavbar";

export interface MyState {
  newsList: any;
}

export default class App extends Component<{}, MyState> {
  async componentDidMount() {
    await fetch("https://api.hnpwa.com/v0/news/1.json")
      .then(response => response.json())
      .then(json =>
        this.setState({
          newsList: json
        })
      );
  }

  render() {
    console.log(this.state.newsList);
    return (
      <Container fluid={true}>
        <CustomNavbar />
        <MainView />
      </Container>
    );
  }
}
