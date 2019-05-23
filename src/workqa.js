import React from "react";

export default class QA extends React.Component {
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
          <h3>QUALITY ASSURANCE</h3>
          <h4>
            <a
              className="titleLinks"
              href="https://www.branchingminds.com/"
              target="_blank"
            >
              Branching Minds
            </a>
          </h4>
          <p>
            The CTO of{" "}
            <a
              className="link"
              href="https://www.branchingminds.com/"
              target="_blank"
            >
              Branching Minds
            </a>{" "}
            taught me the fundamentals of manual testing; how to write features,
            bugs and test our web app. Shortly afterwards, I ended up re-writing
            our{" "}
            <span className="link">
              <a
                className="link"
                href="https://docs.google.com/spreadsheets/d/18CCj6eoYP23h4gbGigPyozV7hHFGo0Wqv8gcND8Z8yQ/edit?usp=sharing"
                target="_blank"
              >
                QA testing document
              </a>
            </span>
            .
          </p>

          <h4>
            <a
              className="titleLinks"
              href="https://hellodogspot.com/"
              target="_blank"
            >
              Dog Parker
            </a>
          </h4>
          <p>
            In Dog Parker (now{" "}
            <a
              className="link"
              href="https://hellodogspot.com/"
              target="_blank"
            >
              DogsSpot
            </a>
            ), they didnt have a QA protocol in place, so with help of the COO,
            I created a{" "}
            <span className="link">
              <a
                className="link"
                href="https://docs.google.com/spreadsheets/d/1d8S1vUjCVv1mqvJ5zWzpxwK92dFsd9XeRZq_nTrbO_8/edit?usp=sharing"
                target="_blank"
              >
                QA testing document
              </a>
            </span>
            , which I later used to manually test the dog house, mobile app and
            admin site.
          </p>
          <h4>
            <a
              className="titleLinks"
              href="https://github.com/Wilfredoo/JobDirecto---automation"
              target="_blank"
            >
              QA automation
            </a>
          </h4>
          <p>
            Recently my friend and colleage Jonathan Poischen taught me the
            fundamentals of QA automation using Ruby, Selenium and Capybara.
            This was quite fun and I’d like to improve in this.{" "}
            <span className="link">
              <a
                className="link"
                href="https://github.com/Wilfredoo/JobDirecto---automation"
                target="_blank"
              >
                Here is the bot I created
              </a>
            </span>{" "}
            to scrape emails from Craigslist. Works like a charm.
            <div className="references">
              <h5 className="referenceTitle"> References:</h5>
              <p className="referenceText">
                {" "}
                Todd Schechter <br /> todd@dogspot.com
              </p>
              <p className="referenceText">
                {" "}
                William Farrell <br /> will@branchingminds.com{" "}
              </p>
              <p className="referenceText">
                {" "}
                Jonathan Poischen <br /> jonpoischen@gmail.com{" "}
              </p>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
