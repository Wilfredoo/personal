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
            I have written copy for landing pages, facebook groups and lots,
            lots of email. <br />
            <br />I got my 2 jobs in NYC cold emailing the founders and a single
            job post on facebook got me
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto1: !this.state.showPhoto1
                })
              }
            >
              {" "}
              interviews{" "}
            </span>
            {this.state.showPhoto1 ? (
              <div id="container">
                <div id="parentofimageandclose">
                  <img className="photo" src="./copy1.png" />
                  <button
                    onClick={() =>
                      this.setState({
                        showPhoto1: !this.state.showPhoto1
                      })
                    }
                    className="closephotobutton"
                  >
                    <i className="fa fa-close" />
                  </button>
                </div>{" "}
                <div id="siblingDiv" />
              </div>
            ) : (
              true
            )}{" "}
            with two companies in Berlin.
            <br />
            <br /> When it comes to creative and strategic writing, I know my
            ship.
          </p>
        </div>
      </div>
    );
  }
}
