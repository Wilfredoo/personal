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

  render() {
    return (
      <div className="workArea">
        <button onClick={this.props.back} className="back">
          <i className="fa fa-arrow-left" />
        </button>

        <div className="workContent">
          <h3> GROWTH </h3>

          <h4>
            <a
              className="titleLinks"
              href="http://jobdirecto.com/"
              target="_blank"
            >
              Jobdirecto
            </a>
          </h4>
          <p>
            I grew JobDirecto from 0 to the{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto1: !this.state.showPhoto1
                })
              }
            >
              thousands of users that it has today{" "}
            </span>
            {this.state.showPhoto1 ? (
              <div class="container">
                <div class="parentofimageandclose">
                  <img className="photo" src="./growth1.png" />
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
                </div>{" "}
                <div id="siblingDiv" />
              </div>
            ) : (
              true
            )}
            , without spending a single euro on ads. How? Lots of work in
            facebook groups and email marketing. At the moment I scrape emails
            from Craigslist to drive restaurants looking for staff to my site.
          </p>
          <h4>
            <a
              className="titleLinks"
              href="https://play.google.com/store/apps/details?id=colibri.colibri.colibri"
              target="_blank"
            >
              Colibri
            </a>
          </h4>
          <p>
            While Jon was building our dating app Colibri, I was accountable to
            get the testers and users for it. At first I started by going to
            comedy open mics and telling people about the app after doing some{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto2: !this.state.showPhoto2
                })
              }
            >
              dating jokes on stage{" "}
            </span>
            {this.state.showPhoto2 ? (
              <div class="container">
                <div class="parentofimageandclose">
                  <img className="photo" src="./growth2.jpg" />
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
                </div>{" "}
                <div id="siblingDiv" />
              </div>
            ) : (
              true
            )}{" "}
            . This was fun (for me) but inefficient. Then I went to Tinder an
            Bumble apps{" "}
            <span
              className="link"
              onClick={() =>
                this.setState({
                  showPhoto3: !this.state.showPhoto3
                })
              }
            >
              to drive their users to us{" "}
            </span>
            {this.state.showPhoto3 ? (
              <div class="container">
                <div class="parentofimageandclose">
                  <img className="photo" src="./growth3.png" />
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
                </div>{" "}
                <div id="siblingDiv" />
              </div>
            ) : (
              true
            )}
            . This worked better and I got around 200 people to sign in for the
            app.
          </p>
          <h4>
            <a
              className="titleLinks"
              href="https://www.facebook.com/Aprueba.EVA.upc/"
              target="_blank"
            >
              ApruebaEVA
            </a>
          </h4>
          <p>
            How I got hundreds of students for my little finance school
            apruebaEVA back in good old Peru? Lots of emails and a solid
            facebook page. Nothing fancy, but it did the work and payed the
            bills.
          </p>
          <h5 className="referenceTitle">References:</h5>
          <p className="referenceText">Daniel Riaz - daniel.riaz@gmail.com </p>
          <p className="referenceText">
            Jonathan Poischen - jonpoischen@gmail.com
          </p>
        </div>
      </div>
    );
  }
}
