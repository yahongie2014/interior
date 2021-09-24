import { React, Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="footer">
        <h1>HOMMMMEEE</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
