import React, { Component } from "react";
import Repo from "./components/Repo";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: "Array",
        status: "Private",
        language: "HTML"
      },
      {
        id: 2,
        title: "Object",
        status: "Public",
        language: "JavaScript"
      },
      {
        id: 3,
        title: "React",
        status: "Public",
        language: "JavaScript"
      }
    ]
  };
  render() {
    const {state} = this ;
    const {repos} = state ;
    
    return (
      <>
        <Header />
        <h6>App</h6>
        <div>
        <Repo repos={repos} />
        </div>
      </>
    );
  }
}
