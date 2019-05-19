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
          <p className="aboutContact">
            I kept this site simple on purpose.
            <br /> If you got questions, send me a line to{" "}
            <span id="email"> me@wilfredocasas.com </span> and we'll get coffee
            and talk.
          </p>
          <p className="aboutContact">
            <br />
            Also you can invite me to your fancy headquarters ;){" "}
          </p>
        </div>
      </div>
    );
  }
}
