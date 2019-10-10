import React, { Component } from "react";

export default class Table extends Component {
  render() {
    const { props } = this;
    const { repos, deleteRepo , checkStatus } = props;
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
              <th scope="col">Check</th>
              <th scope="col">Is Private</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => (
              <tr value={repo} key={index}>
                <td>{repo.id}</td>
                <td>{repo.title}</td>
                <td>{repo.status.toUpperCase()}</td>
                <td>{repo.language}</td>
                <td>
                  <input type="checkbox" onClick = {() => checkStatus(repo.id)} style={{ cursor : "pointer" }} />
                </td>
                <td>{repo.status === "Private" ? "YES" : "NO"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteRepo(repo.id)}
                  >
                    &#128465;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
