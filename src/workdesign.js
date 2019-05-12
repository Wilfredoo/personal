import React from "react";

export default class Design extends React.Component {
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
          <h3>DESIGN</h3>
          <h4 className="titleLinks">Guantes la Pepa</h4>
          <p>
            I guess the first thing I ever designed were these longboarding
            gloves for Guantes la Pepa. After much prototyping and testing{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto1: !this.state.showPhoto1
                })
              }
            >
              it became this.{" "}
            </span>
            {this.state.showPhoto1 ? (
              <div id="container">
                <div id="parentofimageandclose">
                  <img className="photo" src="./design1.jpg" />
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
            )}
          </p>
          <h4>
            <a
              className="titleLinks"
              href="http://colibriapp.de/"
              target="_blank"
            >
              Waitlist for Colibri
            </a>
          </h4>
          <p>
            One of my most recent projects was to design{" "}
            <a className="link" href="http://colibriapp.de/" target="_blank">
              this waitlist
            </a>{" "}
            to get people to sign in for our dating app Colibri. It wasnt easy
            but it was certainly fun!
          </p>
          <h4>
            <a
              className="titleLinks"
              href="http://jobdirecto.com/"
              target="_blank"
            >
              JobDirecto
            </a>
          </h4>
          <p>
            I designed a complex prototype that people didnt use. It was fancy
            but it was crap. Then I designed this{" "}
            <a className="link" href="http://jobdirecto.com/" target="_blank">
              simplistic job board
            </a>{" "}
            * that people loved. Oh, the world...
          </p>
          <h4>
            And of course... this personal site. Hopefully you dont find it so
            crappy!
          </h4>
        </div>
      </div>
    );
  }
}
