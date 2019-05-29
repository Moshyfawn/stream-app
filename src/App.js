import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Router from "./router";
import { loadSession } from "store/user";

class App extends PureComponent {
  componentWillMount() {
    this.props.loadSession();
  }

  render() {
    const { isAppInitializing } = this.props;

    // TODO: Add loader
    if (isAppInitializing) {
      return <div>Loading Session</div>;
    }

    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAppInitializing: state.user.isInitializing
});

const mapDispatchToProps = {
  loadSession
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
