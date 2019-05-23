import React from "react";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/mailtoui@1.0.2/dist/mailtoui-min.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
        <div id="contact">
          <h2>Contact</h2>

          <p className="aboutContact">
            I kept this site simple on purpose. If you got questions, send me a
            line to{" "}
            <a
              id="email"
              class="mailtoui"
              href="mailto:me@wilfredocasas.com?subject=hi you look pretty badass, can we hire you?"
            >
              me@wilfredocasas.com
            </a>{" "}
            and we'll get coffee and talk.
          </p>
          <p className="aboutContact">
            Also you can invite me to your fancy headquarters ;){" "}
          </p>
        </div>
      </div>
    );
  }
}
