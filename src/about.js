import React from "react";
import { Link, withStyle } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

export class About extends React.Component {
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
        <form method="post" onSubmit={() => this.props.submit(this.state)}>
          <div id="about">
            <h2>About me</h2>
            <div className="aboutTextSection">
              <p className="aboutText">
                Hi there, I'm Wilfredo, or well, at least I'm his website. He
                has given me full powers to speak on his behalf though, and so I
                will.{" "}
              </p>
              <p className="aboutText">
                Wilfredo is looking for an internship or junior position as a
                software developer in a small team in Berlin where he can learn
                and do.
              </p>
              <p className="aboutText">
                Also he's got a few other skills that he can help with, such as
                Growth and QA.
              </p>{" "}
              <p className="aboutText">And that's it. Cheers ya'll!</p>
            </div>
            <div id="aboutIconSection">
              <a target="_blank" href="https://github.com/Wilfredoo">
                <i className="about" class="fa fa-github aboutIcons" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/wilfredo.casas.752"
              >
                <i class="fa fa-facebook aboutIcons" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/wilfredocasas/"
              >
                <i class="fa fa-linkedin aboutIcons" />
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
