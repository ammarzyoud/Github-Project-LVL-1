import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <div>
        <h6>Add Repo</h6>
        <form>
          <div class="form-group p-4 w-25">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Repo Title"
            />
          </div>
          <div class="form-group p-4 w-25">
            <label for="repo language">Repo language</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Repo Language"
            />
            <button type="sumbit" className="btn btn-success m-3">
              Add
            </button>
          </div>

          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
