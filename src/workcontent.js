import React from "react";

export class Growth extends React.Component {
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

  // <span className="link" onClick={() => this.setState({
  //   showPhoto1: !this.state.showPhoto1
  // })}>
  // thousands of people </span>
  // { this.state.showPhoto1 ? (
  //   <img src="https://goo.gl/4z81vo" />
  // ) : true }

  render() {
    return (
      <div className="modal">
        <button onClick={() => this.props.history.push('/')} className="btn">
          <i className="fa fa-close" />
        </button>
          <div className="workArea">
                    <h3>  GROWTH </h3>
            <p>

       <p className="link" onClick={() => this.setState({
         isVisible: !this.state.isVisible
       })}>
         Esto muestra una imagen
       </p>
       <br />
       { this.state.isVisible ? (
         <img src="https://goo.gl/4z81vo" />
       ) : true }

            <h4><a href="http://jobdirecto.com/" target="_blank">Jobdirecto</a></h4>
JobDirecto grew quickly, and up to date <span className="link" onClick={() => this.setState({
  showPhoto1: !this.state.showPhoto1
})}>
thousands of people </span>
{ this.state.showPhoto1 ? (
  <img src="https://goo.gl/4z81vo" />
) : true }
 have visited to find jobs and dozens of restaurants have used it to find staff. Not a single euro was ever used in advertisement. Lots of work in facebook groups and email marketing was necessary though.

<h4><a href="https://play.google.com/store/apps/details?id=colibri.colibri.colibri" target="_blank">Colibri</a></h4>

While Jon was accountable to build our dating app Colibri, I was accountable to get the users. At first I started going to open mic comedy shows, <span className="link" onClick={() => this.setState({
  showPhoto2: !this.state.showPhoto2
})}>
doing dating jokes on stage </span>
{ this.state.showPhoto2 ? (
  <img src="https://goo.gl/4z81vo" />
) : true } and inviting people in for the app. This was fun (for me) but inefficient. Then I went to other dating apps and <span className="link" onClick={() => this.setState({
  showPhoto3: !this.state.showPhoto3
})}>
invited people to test the app </span>
{ this.state.showPhoto3 ? (
  <img src="https://goo.gl/4z81vo" />
) : true }. This worked better and got around 150 people to sign in for the app.

<h4 className="link" onClick={() => this.setState({
  showPhoto1: !this.state.showPhoto1
})}>
ApruebaEVA </h4>
{ this.state.showPhoto1 ? (
  <img src="https://goo.gl/4z81vo" />
) : true }
How I got hundreds of students for my finance school apruebaEVA back in old good Peru? Lots of emails and a solid facebook page. Nothing fancy, but it did the work and payed the bills.


<h4>References:</h4>
<p>Daniel Riaz - danriaz@gmail.com</p>

            </p>
          </div>
      </div>
    );
  }
}


export class QA extends React.Component {
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
      </div>
    );
  }
}

export class Copy extends React.Component {
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
          <div className="workArea">
                    <h3>  COPYWRITING</h3>
            <p>
                This is my strongest area, as I have written copy for <span className="link" onClick={() => this.setState({
                  showPhoto1: !this.state.showPhoto1
                })}>
                landing pages </span>, facebook pages* and lots, lots, lots of marketing emails. I got my two jobs in NYC through a <span className="link" onClick={() => this.setState({
                  showPhoto1: !this.state.showPhoto1
                })}>
                cold email </span> and this single <span className="link" onClick={() => this.setState({
                  showPhoto1: !this.state.showPhoto1
                })}>
                job post </span> got me job <span className="link" onClick={() => this.setState({
                  showPhoto1: !this.state.showPhoto1
                })}>
                interviews </span> with two companies in Berlin (disclaimer: I didn't end up working with them). When it comes to creative and strategic writing, I know my ship.
</p>

          </div>
      </div>
    );
  }
}

export class Code extends React.Component {
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
          <div className="workArea">
          <h3><a href="https://github.com/Wilfredoo" target="_blank">CODE</a></h3>
<h4><a href="https://github.com/Wilfredoo/JobDirecto" target="_blank">JobDirecto</a></h4>
<p>For my final project at the code bootcamp I went to, I created JobDirecto, a job board for hispanic immigrants in the US. And thats how I fell in love with React.</p>
<h4><a href="https://github.com/Wilfredoo/waitlist" target="_blank">Waitlist for Colibri</a></h4>

  <p>I created this waiting list in React, here is <span><a href="https://github.com/Wilfredoo/waitlist" target="_blank">the repo</a></span>.</p>
<h4>  And well, <span><a href="https://github.com/Wilfredoo/personal" target="_blank">this site</a></span> ;)</h4>
<p>repo here*</p>


<h4>  References:</h4>

  ivana@spiced.com
  kristian@hamilton.com
  jon@poischen.com


          </div>
      </div>
    );
  }
}


export class Design extends React.Component {
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
          <div className="workArea">
          <h3>  DESIGN</h3>
          <h4 className="link" onClick={() => this.setState({
            showPhoto1: !this.state.showPhoto1
          })}>
          Guantes la Pepa </h4>
            <p>I guess the first thing I ever designed were these longboarding gloves for Guantes la Pepa. It started as <span className="link" onClick={() => this.setState({
              showPhoto1: !this.state.showPhoto1
            })}>
            this </span> and through lots of prototyping and testing it became <span className="link" onClick={() => this.setState({
              showPhoto1: !this.state.showPhoto1
            })}>
            this </span>.</p>
            <h4 className="link" onClick={() => this.setState({
              showPhoto1: !this.state.showPhoto1
            })}>
            Waiting list for Colibri </h4>
            <p>One of my most recent projects was to design this waiting list* to get people to sign in for our dating app Colibri. It wasnt easy but it was certainly fun!</p>
            <h4 className="link" onClick={() => this.setState({
              showPhoto1: !this.state.showPhoto1
            })}>
            JobDirecto </h4>
            <p>I designed a complex prototype that people didnt use. It was fancy but it was crap. Then I designed this <span className="link" onClick={() => this.setState({
              showPhoto1: !this.state.showPhoto1
            })}>
            super simplistic job board </span>* that people loved. Oh, the world...</p>
            <h4>And of course... this personal site. Hopefully you dont find it so crappy!</h4>
          </div>
      </div>
    );
  }
}
