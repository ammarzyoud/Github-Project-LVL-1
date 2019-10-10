import React, { Component } from "react";
import Table from "./Table";

export default class Repo extends Component {
  render() {
    const { props } = this;
    const { repos, deleteRepo , checkStatus } = props;
    return (
      <React.Fragment>
        <h6>Repo</h6>
        <div>
          <Table repos={repos} deleteRepo={deleteRepo} checkStatus={checkStatus} />
        </div>
      </React.Fragment>
    );
  }
}
