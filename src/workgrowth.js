import React from "react";

export default class Growth extends React.Component {
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
      <div className="workArea">
        <button onClick={this.props.back} className="back">
          <i className="fa fa-close" />
        </button>

        <div className="workContent">
          <h3> GROWTH </h3>

          <h4>
            <a href="http://jobdirecto.com/" target="_blank">
              Jobdirecto
            </a>
          </h4>
          <p>
            JobDirecto grew quickly, and up to date{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto1: !this.state.showPhoto1
                })
              }
            >
              thousands of people{" "}
            </span>
            {this.state.showPhoto1 ? (
              <img className="photo" src="./growth1.png" />
            ) : (
              true
            )}
            {this.state.showPhoto1 ? (
              <button
                onClick={() =>
                  this.setState({
                    showPhoto1: !this.state.showPhoto1
                  })
                }
                className="closephotobutton"
              >
                <i className="fa fa-close" />
              </button>
            ) : (
              true
            )}
            have visited to find jobs and dozens of restaurants have used it to
            find staff. Not a single euro was ever used in advertisement. Lots
            of work in facebook groups and email marketing was necessary though.
            At the moment I scrape daily emails from Craigslist to reach out
            restaurants in NYC looking for jobs.
          </p>
          <h4>
            <a
              href="https://play.google.com/store/apps/details?id=colibri.colibri.colibri"
              target="_blank"
            >
              Colibri
            </a>
          </h4>
          <p>
            While Jon was accountable to build our dating app Colibri, I was
            accountable to get the users. At first I started going to open mic
            comedy shows,{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto2: !this.state.showPhoto2
                })
              }
            >
              doing dating jokes on stage{" "}
            </span>
            {this.state.showPhoto2 ? (
              <img className="photo" src="./growth2.jpg" />
            ) : (
              true
            )}
            {this.state.showPhoto2 ? (
              <button
                onClick={() =>
                  this.setState({
                    showPhoto2: !this.state.showPhoto2
                  })
                }
                className="closephotobutton"
              >
                <i className="fa fa-close" />
              </button>
            ) : (
              true
            )}{" "}
            and inviting people in for the app. This was fun (for me) but
            inefficient. Then I went to other dating apps and{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto3: !this.state.showPhoto3
                })
              }
            >
              invited people to test the app{" "}
            </span>
            {this.state.showPhoto3 ? (
              <img className="photo" src="growth3.png" />
            ) : (
              true
            )}
            {this.state.showPhoto3 ? (
              <button
                onClick={() =>
                  this.setState({
                    showPhoto3: !this.state.showPhoto3
                  })
                }
                className="closephotobutton"
              >
                <i className="fa fa-close" />
              </button>
            ) : (
              true
            )}
            . This worked better and got around 150 people to sign in for the
            app.
          </p>
          <h4>
            <a href="https://www.facebook.com/Aprueba.EVA.upc/" target="_blank">
              ApruebaEVA
            </a>
          </h4>
          <p>
            How I got hundreds of students for my finance school apruebaEVA back
            in old good Peru? Lots of emails and a solid facebook page. Nothing
            fancy, but it did the work and payed the bills.
          </p>
          <h4>References:</h4>
          <p>Daniel Riaz - danriaz@gmail.com</p>
          <p>Jonathan Poischen - danriaz@gmail.com</p>
        </div>
      </div>
    );
  }
}
