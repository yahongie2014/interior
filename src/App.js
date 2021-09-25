import React from "react";
import { connect } from "react-redux";
import Home from "./containers/Home";
import Trending from "./containers/Trending";
import AppLayout from "./components/AppLayout";
import { Route, Switch, withRouter } from "react-router-dom";
import Watch from "./containers/Watch";
import Search from "./containers/Search";
import { bindActionCreators } from "redux";
import { youtubeLibraryLoaded } from "./store/actions/api";

const API_KEY = "AIzaSyCpGnl9FtGEDIfait5i0tqm_rdvgTrc2IA";

class App extends React.Component {
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/feed/trending" component={Trending} />
          <Route
            path="/results"
            render={() => <Search key={this.props.location.key} />}
          />
          <Route
            path="/watch"
            render={() => <Watch key={this.props.location.key} />}
          />
        </Switch>
      </AppLayout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
