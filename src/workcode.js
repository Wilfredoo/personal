import React from "react";

export default class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Code component happens");
  }

  render() {
    return (
      <div className="workArea">
        <h3>
          <a href="https://github.com/Wilfredoo" target="_blank">
            CODE
          </a>
        </h3>
        <h4>
          <a href="https://github.com/Wilfredoo/JobDirecto" target="_blank">
            JobDirecto
          </a>
        </h4>
        <p>
          For my final project at the code bootcamp I went to, I created
          JobDirecto, a job board for hispanic immigrants in the US. And thats
          how I fell in love with React.
        </p>
        <h4>
          <a href="https://github.com/Wilfredoo/waitlist" target="_blank">
            Waitlist for Colibri
          </a>
        </h4>
        <p>
          I created this waiting list in React, here is{" "}
          <span>
            <a href="https://github.com/Wilfredoo/waitlist" target="_blank">
              the repo
            </a>
          </span>
          .
        </p>
        <h4>
          {" "}
          And well,{" "}
          <span>
            <a href="https://github.com/Wilfredoo/personal" target="_blank">
              this site
            </a>
          </span>{" "}
          ;)
        </h4>
        <p>repo here*</p>
        <h4> References:</h4>
        ivana@spiced.com kristian@hamilton.com jon@poischen.com
      </div>
    );
  }
}
