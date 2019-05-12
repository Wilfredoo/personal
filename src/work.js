import React from "react";

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Work component happens");
  }

  render() {
    return (
      <div id="work">
        <h2>My work</h2>
        <a
          className="titleLinks"
          onClick={e => this.props.setModal("Growth")}
          href="#"
        >
          Growth
        </a>
        <br />

        <a
          className="titleLinks"
          onClick={e => this.props.setModal("QA")}
          href="#"
        >
          QA
        </a>
        <br />

        <a
          className="titleLinks"
          onClick={e => this.props.setModal("Design")}
          href="#"
        >
          Design
        </a>
        <br />

        <a
          className="titleLinks"
          onClick={e => this.props.setModal("Copy")}
          href="#"
        >
          Copy
        </a>
        <br />

        <a
          className="titleLinks"
          onClick={e => this.props.setModal("Code")}
          href="#"
        >
          Code
        </a>
      </div>
    );
  }
}
