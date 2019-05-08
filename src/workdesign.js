import React from "react";



export default class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}
