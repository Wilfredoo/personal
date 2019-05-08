import React from "react";
import Modal from "./modal.js";

export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalid: ""
    };
    this.handleClose = this.handleClose.bind(this);
  }

  setModal(modalid) {
    this.setState({
      modalid: modalid
    });
  }

  handleClose() {
    this.setState({
      modalid: ""
    });
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
        <div id="about">
          <a onClick={e => this.setModal("Growth")} href="#">
            Growth
          </a>
          <br />

          <a onClick={e => this.setModal("QA")} href="#">
            QA
          </a>
          <br />

          <a onClick={e => this.setModal("Design")} href="#">
            Design
          </a>
          <br />

          <a onClick={e => this.setModal("Copy")} href="#">
            Copy
          </a>
          <br />

          <a onClick={e => this.setModal("Code")} href="#">
            Code
          </a>

          {this.state.modalid != "" && (
            <Modal modalid={this.state.modalid} close={this.handleClose} />
          )}
        </div>
      </div>
    );
  }
}
