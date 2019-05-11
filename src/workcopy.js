import React from "react";

export default class Copy extends React.Component {
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

  render() {
    return (
      <div className="workArea">
        <button onClick={this.props.back} className="back">
          <i className="fa fa-arrow-left" />
        </button>
        <div className="workContent">
          <h3> COPYWRITING</h3>
          <p>
            This is my strongest area, as I have written copy for landing pages,
            facebook groups and lots, lots of email. I got my 2 jobs in NYC cold
            emailing the founder and a single job post on facebook got me
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto3: !this.state.showPhoto3
                })
              }
            >
              two interviews{" "}
            </span>
            {this.state.showPhoto3 ? <img src="copy2.png" /> : true}
            {this.state.showPhoto3 ? (
              <button
                onClick={() =>
                  this.setState({
                    showPhoto3: !this.state.showPhoto3
                  })
                }
                className="closephotobutton"
              >
                <i className="fa fa-close" />
              </button>
            ) : (
              true
            )}{" "}
            with two companies in Berlin (disclaimer: I didn't end up working
            with them). When it comes to creative and strategic writing, I know
            my ship.
          </p>
        </div>
      </div>
    );
  }
}
