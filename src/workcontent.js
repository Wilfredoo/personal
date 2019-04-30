import React from "react";

export class Growth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false

    };
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
          <div className="workArea">
                    <h3>  GROWTH </h3>
            <p>

       <p onClick={() => this.setState({
         isVisible: !this.state.isVisible
       })}>
         Esto muestra una imagen
       </p>
       <br />
       { this.state.isVisible ? (
         <img src="https://goo.gl/4z81vo" />
       ) : true }

            <h4>Jobdirecto</h4>
JobDirecto grew quickly, and up to date thousands of people* have visited to find jobs and dozens of restaurants have used it to find staff. Not a single euro was ever used in advertisement. Lots of work in facebook groups and email marketing was necessary though.

<h4>Colibri</h4>
While Jon was accountable to build our dating app Colibri, I was accountable to get the users. At first I started going to open mic comedy shows, doing dating jokes on stage* and inviting people in for the app. This was fun (for me) but inefficient. Then I went to other dating apps and invited people to test the app*. This worked better and got around 150 people to sign in for the app.

<h4>ApruebaEVA</h4>
How I got hundreds of students* for my finance school apruebaEVA back in old good Peru? Lots of emails and a solid facebook page. Nothing fancy, but it did the work and payed the bills.


References:
Daniel Riaz - danriaz@gmail.com

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


        <h4>    Branching Minds</h4>
            My story with QA start in 2016, when I got an internship in a startup in NYC called Branching Minds. The CTO was also the QA tester, and so taught me how to do QA so he could focus on the programming part. Here I learned the in and outs of manual testing and then I ended up rebuilding the QA testing document.



        <h4>    Dog Parker</h4>
            Later I went to Dog Parker. They didnt have any QA protocol in place, so for my first 2 months in the company and with help of the COO I worked every day in creating a QA procedure document for manual testing which tested the dog house, mobile app and admin site. Then I was responsible to manual test it using this doc about once a week.



          <h4>  Automated testing, uhh</h4>
            I was lucky enough to befriend and work with Jonathan Poischen, who has a lot of experience as a software engineer, and who in his spare time taught me the fundamentals of QA automation using Ruby and Capybara. This was quite fun and I’d like to improve in this.


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
                This is my strongest area, as I have written copy for landing pages, facebook pages and lots, lots, lots of marketing emails. I got my two jobs in NYC through a cold email and this single job post got me job interviews with two companies in Berlin (disclaimer: I didn't end come to an agreement with any of them). When it comes to creative and strategic writing, I know my ship.
</p>
<h4>            References:</h4>
<p>           Elliot Schwarz - elliot@elliot.com</p>

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
          <h3>  SOFTWARE DEVELOPMENT</h3>

<h4>  JobDirecto</h4>
<p>For my final project at the code bootcamp I went to, I created JobDirecto, a job board for hispanic immigrants in the US. And thats how I fell in love with React. </p>
  <h4>Colibri waiting list</h4>
  <p>I created this waiting list in React, here is the repo.</p>
<h4>  And well, this site :)</h4>



<h4>  References:</h4>

  matt@fewer.com
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


            <h4>Guantes la Pepa</h4>
            <p>I guess the first thing I ever designed were these longboarding gloves for Guantes la Pepa. It started as this and through lots of prototyping and testing it became this.</p>

            <h4>Colibri waiting list</h4>
            <p>One of my most recent projects was to design this waiting list to get people to sign in for our dating app Colibri. It wasnt easy but it was certainly fun!</p>

            <h4>JobDirecto</h4>
            <p>I designed a complex prototype that people didnt use. It was fancy but it was crap. Then I designed this super simplistic job board that people loved. Oh, life...</p>

            <h4>And of course... this site. Hopefully you dont find it so crappy!</h4>


          </div>
      </div>
    );
  }
}
