import React from "react";
import { Growth, QA, Design, Copy, Code } from "./workcontent.js";



export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGrowth: false,
    };
  }

  handleClickGrowth() {
      this.setState({
        showGrowth: true,
      });
    }

    hideGrowth() {
      this.setState({ showGrowth: false });
    }

    handleClickQA() {
        this.setState({
          showQA: true,
        });
      }

      hideQA() {
        this.setState({ showQA: false });
      }

      handleClickCopy() {
          this.setState({
            showCopy: true,
          });
        }

        hideCopy() {
          this.setState({ showCopy: false });
        }


        handleClickDesign() {
            this.setState({
              showDesign: true,
            });
          }

          hideDesign() {
            this.setState({ showDesign: false });
          }

          handleClickCode() {
              this.setState({
                showCode: true,
              });
            }

            hideCode() {
              this.setState({ showCode: false });
            }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
          <div id="about">
              <a onClick={e => this.handleClickGrowth()}  href="#">
            Growth
          </a>
          <br />

          <a onClick={e => this.handleClickQA()}  href="#">
        QA
      </a>
      <br />

      <a onClick={e => this.handleClickDesign()}  href="#">
    Design
  </a>
  <br />

  <a onClick={e => this.handleClickCopy()}  href="#">
Copy
</a>
<br />

<a onClick={e => this.handleClickCode()}  href="#">
Code
</a>

          {this.state.showGrowth && (
                    <Growth  close={e => this.hideGrowth()  } /> )}
                    {this.state.showQA && (
                              <QA  close={e => this.hideQA()  } /> )}
                              {this.state.showCopy && (
                                        <Copy  close={e => this.hideCopy()  } /> )}
                                        {this.state.showDesign && (
                                                  <Design  close={e => this.hideDesign()  } /> )}
                                                  {this.state.showCode && (
                                                            <Code  close={e => this.hideCode()  } /> )}


      </div>
      </div>
    );
  }
}
