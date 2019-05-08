import React from "react";

export default class Copy extends React.Component {
  render() {
    return (
      <div className="workArea">
        <h3> COPYWRITING</h3>
        <p>
          This is my strongest area, as I have written copy for{" "}
          <span
            className="link"
            onClick={() =>
              this.setState({
                showPhoto1: !this.state.showPhoto1
              })
            }
          >
            landing pages{" "}
          </span>
          , facebook pages* and lots, lots, lots of marketing emails. I got my
          two jobs in NYC through a{" "}
          <span
            className="link"
            onClick={() =>
              this.setState({
                showPhoto1: !this.state.showPhoto1
              })
            }
          >
            cold email{" "}
          </span>{" "}
          and this single{" "}
          <span
            className="link"
            onClick={() =>
              this.setState({
                showPhoto1: !this.state.showPhoto1
              })
            }
          >
            job post{" "}
          </span>{" "}
          got me job{" "}
          <span
            className="link"
            onClick={() =>
              this.setState({
                showPhoto1: !this.state.showPhoto1
              })
            }
          >
            interviews{" "}
          </span>{" "}
          with two companies in Berlin (disclaimer: I didn't end up working with
          them). When it comes to creative and strategic writing, I know my
          ship.
        </p>
      </div>
    );
  }
}
