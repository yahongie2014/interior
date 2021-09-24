import { React, Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="footer">
        <h1>About</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
