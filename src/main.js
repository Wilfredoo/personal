import React from "react";
import { About } from "./about.js";
import Work from "./work.js";
import { Contact } from "./contact.js";
import Modal from "./modal.js";
import Code from "./workcode.js";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      showContact: false,
      modalid: ""
    };
    this.handleClose = this.handleClose.bind(this);
    this.setModal = this.setModal.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    console.log("Main component happens");
  }

  setModal(modalid) {
    console.log("Main - setModal before");
    this.setState(
      {
        modalid: modalid
      },
      () => {
        console.log("Main - state in setModal: ", this.state);
      }
    );
  }

  handleClose() {
    this.setState({
      modalid: ""
    });
  }

  handleBack() {
    this.setState({
      modalid: "Work"
    });
  }

  handleClickAbout() {
    this.setState({
      showAbout: true
    });
  }

  hideAbout() {
    this.setState({ showAbout: false });
  }

  hideWork() {
    this.setState({ showWork: false });
  }

  handleClickContact() {
    this.setState({
      showContact: true
    });
  }

  hideContact() {
    this.setState({ showContact: false });
  }

  handleDidCopy() {
    console.log("Copied content");
    this.setState({
      pop: "clip-pop"
    });
  }
  handleMouseOut() {
    if (this.state && this.state.pop) {
      this.setState({
        pop: null
      });
    }
  }
  handleCopy() {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNode(this.sample);
    selection.empty();
    selection.addRange(range);

    if (document.execCommand("copy")) {
      this.handleDidCopy();
    } else {
      console.log("Copy failed");
    }
  }

  render() {
    return (
      <div className="bg">
        <div className="main">
          <h1 className="mainTitle">Wilfredo Casas</h1>
          <a
            className="titleLinks"
            onClick={e => this.handleClickAbout()}
            href="#"
          >
            About me
          </a>
          <br />

          <a
            className="titleLinks"
            onClick={e => this.setModal("Work")}
            href="#"
          >
            My work
          </a>
          <br />
          <a
            className="titleLinks"
            onClick={e => this.handleClickContact()}
            href="#"
          >
            Contact
          </a>

          {this.state.showAbout && <About close={e => this.hideAbout()} />}
          {this.state.showContact && (
            <Contact close={e => this.hideContact()} />
          )}
          {this.state.modalid != "" && (
            <Modal
              modalid={this.state.modalid}
              close={this.handleClose}
              setModal={this.setModal}
              back={this.handleBack}
            />
          )}
        </div>
      </div>
    );
  }
}
