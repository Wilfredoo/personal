import React from "react";

export default class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      showPhoto1: false,
      showPhoto2: false,
      showPhoto3: false,
      showPhoto4: false,
      showPhoto5: false,
      showPhoto6: false,
      showPhoto7: false,
      showPhoto8: false,
      showPhoto9: false,
      showPhoto10: false
    };
  }

  componentDidMount() {
    console.log("Code component happens");
  }

  render() {
    return (
      <div className="workArea">
        <button onClick={this.props.back} className="back">
          <i className="fa fa-arrow-left" />
        </button>
        <div className="workContent">
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
          <p>kristian@hamilton.com </p>
          <p>amber@codebar.com </p>
        </div>
      </div>
    );
  }
}
