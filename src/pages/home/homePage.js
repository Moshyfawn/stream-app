import React, { PureComponent } from "react";

import PageWrapper from "modules/navigation/pageWrapper";
import Dashboard from "modules/recording/dashboard";

class HomePage extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <div className="home-page">
          <Dashboard />
        </div>
      </PageWrapper>
    );
  }
}

export default HomePage;
