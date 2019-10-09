import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div className="container">
        <h6>Repos</h6>
        <table className="table w-75">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.props.repos.map((repo, index) => (
            <tr
              value={repo}
              key={index}
            >
              <td>{repo.id}</td>
              <td>{repo.title}</td>
              <td>{repo.status}</td>
              <td>{repo.language}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
