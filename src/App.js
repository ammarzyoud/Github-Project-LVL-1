import React, { Component } from "react";
import Table from "./components/Table";
import Add from "./components/Add";
import Header from "./components/Header";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

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

  checkStatus = id => {
    console.log("id :", id);
    const newArr = this.state.repos.map(repo => {
      if (repo.id === id) {
        if (repo.status === "Private") {
          repo.status = "Public";
        } else {
          repo.status = "Private";
        }
      }
      return repo;
    });
    this.setState({ repos: newArr });
  };

  deleteRepo = id => {
    const { state } = this;
    const { repos } = state;
    this.setState({
      repos: repos.filter(elem => {
        return elem.id !== id;
      })
    });
  };

  AddRepo = (title, language, status) => {
    const { state } = this;
    const { repos } = state;
    // console.log("title :" , title , "language :" , language);
    const newRepo = {
      id: uuid.v4(),
      title,
      status,
      language
    };
    this.setState({ repos: [...repos, newRepo] });
  };

  render() {
    const { state, deleteRepo, checkStatus, AddRepo } = this;
    const { repos } = state;
    return (
      <>
        <Header />
        <div>
          <Table 
          repos = {repos}
          deleteRepo={deleteRepo}
          checkStatus={checkStatus} />
          <hr />
          <Add AddRepo={AddRepo} />
        </div>
        <Footer />
      </>
    );
  }
}
