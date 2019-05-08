import React from "react";



export default class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
          <div className="workArea">

                    <h3>QUALITY ASSURANCE</h3>
            <p>

            <h4><a href="https://www.branchingminds.com/" target="_blank">Branching Minds</a></h4>

            My story with QA start in 2016, when I got an internship in a startup in NYC called Branching Minds. The CTO was also the QA tester, and so taught me how to do QA so he could focus on the programming part. Here I learned the in and outs of manual testing and then I ended up rebuilding <span className="link"><a href="https://docs.google.com/spreadsheets/d/18CCj6eoYP23h4gbGigPyozV7hHFGo0Wqv8gcND8Z8yQ/edit?usp=sharing" target="_blank">the QA testing document*</a></span>.

            <h4><a href="https://hellodogspot.com/" target="_blank">Dog Parker</a></h4>

            Later I went to Dog Parker (now DogSpot). They didnt have any QA protocol in place, so for my first 2 months in the company and with help of the COO I worked every day in creating a <span className="link"><a href="https://docs.google.com/spreadsheets/d/1d8S1vUjCVv1mqvJ5zWzpxwK92dFsd9XeRZq_nTrbO_8/edit?usp=sharing" target="_blank">QA procedure document*</a></span> for manual testing which tested the dog house, mobile app and admin site. Then I was responsible to manual test it using this doc about once a week.

          <h4>  Automated testing, uhh*</h4>
            I was lucky enough to work with <span className="link" onClick={() => this.setState({
              showPhoto1: !this.state.showPhoto1
            })}>
            Jonathan Poischen </span>
            { this.state.showPhoto1 ? (
              <img src="https://goo.gl/4z81vo" />
            ) : true }*, who has a lot of experience as a software engineer, and who in his spare time taught me the fundamentals of QA automation using Ruby and Capybara. This was quite fun and I’d like to improve in this. Check out some work I did here.


            References:
            Todd Schechter - todd@dogparker.com
            William Farrell - will@branchingminds.com
            Jonathan Poischen - jonpoischen@gmail.com
            </p>
          </div>
    );
  }
}
