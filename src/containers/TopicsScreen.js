import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./TopicsScreen.css";
import * as TopicsActions from "../store/topics/actions";

function TopicsScreen({ dispatch }) {
  useEffect(() => {
    dispatch(TopicsActions.fetchTopics());
  }, [dispatch]);

  return <h2>Where are my topics?</h2>;
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(TopicsScreen);
