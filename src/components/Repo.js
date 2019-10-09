import React, { Component } from "react";
import Table from "./Table";

export default class Repo extends Component {
  render() {
    return (
      <React.Fragment>
        <h6>Repo</h6>
        <div>
          <Table repos={this.props.repos} />
        </div>
      </React.Fragment>
    );
  }
}
