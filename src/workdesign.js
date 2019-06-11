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
            I guess the first thing I designed were these longboarding gloves
            for my first business, Guantes la Pepa. After much prototyping they
            ended up looking{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto1: !this.state.showPhoto1
                })
              }
            >
              like this.{" "}
            </span>
            {this.state.showPhoto1 ? (
              <div class="container">
                <div class="parentofimageandclose">
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
            <a
              className="link"
              href="http://www.colibriapp.de/"
              target="_blank"
            >
              this waiting list
            </a>{" "}
            to get people to sign in for the dating app I co-created,{" "}
            <a
              className="link"
              href="http://www.colibriapp.de/"
              target="_blank"
            >
              Colibri
            </a>
            . It wasn't easy but it was certainly fun!
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
            For my job site JobDirecto, I designed a complex prototype that
            people didn't use; it was fancy but it was crap. Then I designed
            this{" "}
            <a className="link" href="http://jobdirecto.com/" target="_blank">
              simple job board
            </a>{" "}
            that people loved. Oh, the world...
          </p>
          <h4 className="titleLinks">Personal Site</h4>
          <p>
            {" "}
            And of course, I designed this site you are looking at now.
            Hopefully you don't find it so crappy!
          </p>
        </div>
      </div>
    );
  }
}
