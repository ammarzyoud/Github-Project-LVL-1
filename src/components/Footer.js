import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50 mt-5">
          <div className="container text-center">
            <small>Copyright &copy; Your Website</small>
          </div>
        </footer>
      </div>
    );
  }
}
