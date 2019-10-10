import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { props } = this;
    const { deleteRepo, checkStatus } = props;
    return (
      <div className="container mt-5">
        <h6>Repos</h6>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Language</th>
              <th scope="col">Check</th>
              <th scope="col">Is Private</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            this.props.repos.map(repo => {
              return <Repo 
              repo={repo}
              deleteRepo={deleteRepo}
              checkStatus={checkStatus} />
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
