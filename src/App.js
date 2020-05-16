import React from "react";
import { connect } from "react-redux";
import * as TopicsSelectors from "./store/topics/reducer";
import TopicsScreen from "./containers/TopicsScreen";
import PostsScreen from "./containers/PostsScreen";
import "./App.css";

function App({ isSelectionFinalized }) {
  return (
    <div className="App">
      {!isSelectionFinalized ? <TopicsScreen /> : <PostsScreen />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSelectionFinalized: TopicsSelectors.isTopicSelectionFinalized(state),
  };
};

export default connect(mapStateToProps)(App);
