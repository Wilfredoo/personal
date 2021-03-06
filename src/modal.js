import React from "react";
import Code from "./workcode.js";
import Growth from "./workgrowth.js";
import Copy from "./workcopy.js";
import Design from "./workdesign.js";
import QA from "./workqa.js";
import Work from "./work.js";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("modal component happens");
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-times" />
        </button>
        {this.props.modalid == "Code" && <Code back={this.props.back} />}
        {this.props.modalid == "Copy" && <Copy back={this.props.back} />}
        {this.props.modalid == "QA" && <QA back={this.props.back} />}
        {this.props.modalid == "Growth" && (
          <Growth back={this.props.back} closePhoto={this.props.closePhoto} />
        )}
        {this.props.modalid == "Design" && <Design back={this.props.back} />}
        {this.props.modalid == "Work" && (
          <Work setModal={this.props.setModal} />
        )}
      </div>
    );
  }
}
