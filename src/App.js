import React from "react";
import { connect } from "react-redux";
import Home from "./containers/Home";
import About from "./containers/About";
import AppLayout from "./components/AppLayout";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </AppLayout>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
