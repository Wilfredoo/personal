import React from "react";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
        <div id="contact">
          <h2>Contact</h2>
          <p>me@wilfredocasas.com</p>
        </div>
      </div>
    );
  }
}
