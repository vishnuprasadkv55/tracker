import React from "react";

import "./Status.css";
class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TrackDetails: props.details.track
    };
  }
  componentDidMount() {
    var i;
    var track = this.state.TrackDetails;
    var element;
    for (i = 1; i <= track; i++) {
      element = document.getElementById(i);
      element.classList.remove("todo");
      element.classList.add("done");
    }
  }
  render() {
    return (
      <div className="container">
        <ol className="progress-meter">
          <li id="1" className="progress-point todo">
            Submitted
          </li>
          <li id="2" className="progress-point todo">
            In the Queue
          </li>
          <li id="3" className="progress-point todo">
            On it
          </li>
          <li id="4" className="progress-point todo">
            Resolved
          </li>
        </ol>
      </div>
    );
  }
}
export default Status;
