import React from "react";
import Status from "./components/Status";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: 2
    };
  }
  render() {
    return (
      <div>
        <Status details={this.state} />
      </div>
    );
  }
}
export default Home;
