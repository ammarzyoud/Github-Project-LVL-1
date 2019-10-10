import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    const { props } = this;
    const { repo , deleteRepo, checkStatus } = props;
    return (
      <React.Fragment>
  
          <tr>
            <td>{repo.id}</td>
            <td>{repo.title}</td>
            <td>{repo.status.toUpperCase()}</td>
            <td>{repo.language}</td>
            <td>
              <input
                type="checkbox"
                defaultChecked={repo.status === "Private" ? "checked" : ""}
                onClick={() => checkStatus(repo.id)}
                style={{ cursor: "pointer" }}
              />
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

      </React.Fragment>
    );
  }
}
