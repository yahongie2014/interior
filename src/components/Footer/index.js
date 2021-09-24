import { React, Component } from "react";
import { connect } from "react-redux";
import "./style.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1>Hello</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
