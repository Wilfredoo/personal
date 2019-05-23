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
          <h3>CODE</h3>
          <h4>
            <a
              className="titleLinks"
              href="https://www.jobdirecto.com"
              target="_blank"
            >
              JobDirecto
            </a>
          </h4>
          <p>
            For my final project at the{" "}
            <span>
              <a
                className="link"
                href="https://www.spiced-academy.com/"
                target="_blank"
              >
                code bootcamp
              </a>
            </span>{" "}
            I went to here in Berlin, I created JobDirecto using React and Node
            JS.{" "}
            <span>
              <a
                className="link"
                href="https://github.com/Wilfredoo/JobDirecto"
                target="_blank"
              >
                Here is the repo.
              </a>
            </span>
          </p>
          <h4>
            <a
              className="titleLinks"
              href="https://www.colibriapp.de"
              target="_blank"
            >
              Waitlist for Colibri
            </a>
          </h4>
          <p>
            I created this simple waiting list using React and Node JS,{" "}
            <span>
              <a
                className="link"
                href="https://github.com/Wilfredoo/waitlist"
                target="_blank"
              >
                check out the repo!
              </a>
            </span>
          </p>
          <h4>
            <a className="titleLinks" href="https://www.wilfredocasas.com">
              Personal Site
            </a>
          </h4>
          <p>
            And of course, my personal site. Guess what I used? Haha, yes! React
            and Node.{" "}
            <span>
              <a
                className="link"
                href="https://github.com/Wilfredoo/personal"
                target="_blank"
              >
                Repo is here.
              </a>
            </span>
          </p>
          <div className="references">
            <h4 className="referenceTitle"> References:</h4>
            <p className="referenceText">
              Kristian Hamilton
              <br /> +44 77 0723 1474{" "}
            </p>
            <p className="referenceText">
              Jonathan Poischen <br /> jonpoischen@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
