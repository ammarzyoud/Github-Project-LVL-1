import React, { Component } from "react";

export default class Add extends Component {
  state = {
    title: "",
    language: "",
    status: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSumbit = event => {
    const { state } = this;
    const { title, language, status } = state;

    event.preventDefault();
    this.props.AddRepo(title, language, status);
    this.setState({ title: "", language: "", status: "" });
  };

  render() {
    const { state, handleChange, handleSumbit } = this;
    const { title, language, status } = state;

    return (
      <div className="container mt-5">
        <h6>Add Repo</h6>
        <hr />
        <form onSubmit={handleSumbit}>
          <div className="form-group p-4 w-50">
            <label>Title</label>
            <input
              name="title"
              className="form-control"
              placeholder="Enter Repo Title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group p-4 w-50">
            <label>Repo language</label>
            <input
              name="language"
              type="text"
              className="form-control"
              placeholder="Enter Repo Language"
              value={language}
              onChange={handleChange}
            />
          </div>
          <div>
            <select name="status" onChange={handleChange} value={status}>
              <option defaultValue>Repo Status</option>
              <option>Puplic</option>
              <option>Private</option>
            </select>
          </div>
          <button type="sumbit" className="btn btn-success m-3">
            Add
          </button>
        </form>
      </div>
    );
  }
}
