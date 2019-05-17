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
              <p className="aboutText">Hey! </p>
              <p className="aboutText">
                {" "}
                I'm Wilfredo, or well, at least I'm his website, but I'll speak
                on his behalf.{" "}
              </p>
              <p className="aboutText">
                I'm looking for a{" "}
                <span id="juniorPosition">
                  junior position as a full stack software developer in a small
                  team in Berlin{" "}
                </span>{" "}
                where I can learn and do.
              </p>
              <p className="aboutText">
                Also I've got a few other skills that I can help you with, such
                as Growth and QA.
              </p>{" "}
              <p className="aboutText">Feel welcome to my humble site.</p>
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
