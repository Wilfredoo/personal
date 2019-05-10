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
          <i className="fa fa-close" />
        </button>
        <h3>QUALITY ASSURANCE</h3>
        <h4>
          <a href="https://www.branchingminds.com/" target="_blank">
            Branching Minds
          </a>
        </h4>
        <p>
          My story with QA start in 2016, when I got an internship in a startup
          in NYC called Branching Minds. The CTO was also the QA tester, and so
          taught me how to do QA so he could focus on the programming part. Here
          I learned the in and outs of manual testing and then I ended up
          rebuilding{" "}
          <span className="link">
            <a
              href="https://docs.google.com/spreadsheets/d/18CCj6eoYP23h4gbGigPyozV7hHFGo0Wqv8gcND8Z8yQ/edit?usp=sharing"
              target="_blank"
            >
              the QA testing document*
            </a>
          </span>
        </p>
        .
        <h4>
          <a href="https://hellodogspot.com/" target="_blank">
            Dog Parker
          </a>
        </h4>
        <p>
          Later I went to Dog Parker (now DogSpot). They didnt have any QA
          protocol in place, so for my first 2 months in the company and with
          help of the COO I worked every day in creating a{" "}
          <span className="link">
            <a
              href="https://docs.google.com/spreadsheets/d/1d8S1vUjCVv1mqvJ5zWzpxwK92dFsd9XeRZq_nTrbO_8/edit?usp=sharing"
              target="_blank"
            >
              QA procedure document*
            </a>
          </span>{" "}
          for manual testing which tested the dog house, mobile app and admin
          site. Then I was responsible to manual test it using this doc about
          once a week.
          <span className="link">
            <a
              href="https://docs.google.com/spreadsheets/d/1d8S1vUjCVv1mqvJ5zWzpxwK92dFsd9XeRZq_nTrbO_8/edit?usp=sharing"
              target="_blank"
            >
              QA procedure document*
            </a>
          </span>
        </p>
        <h4>
          <a
            href="https://github.com/Wilfredoo/JobDirecto---automation"
            target="_blank"
          >
            QA automation
          </a>
        </h4>
        <p>
          who has a lot of experience as a software engineer, and who in his
          spare time taught me the fundamentals of QA automation using Ruby and
          Capybara. This was quite fun and I’d like to improve in this. Check
          out some work I did here.
          <h4> References:</h4>
          <p> Todd Schechter - todd@dogparker.com</p>
          <p> William Farrell - will@branchingminds.com </p>
          <p> Jonathan Poischen - jonpoischen@gmail.com </p>
        </p>
      </div>
    );
  }
}
