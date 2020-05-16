import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./TopicsScreen.css";
import * as TopicsActions from "../store/topics/actions";
import * as TopicsSelectors from "../store/topics/reducer";
import ListView from "../components/ListView";

function TopicsScreen({ rowsById, rowsIdArray, dispatch }) {
  useEffect(() => {
    dispatch(TopicsActions.fetchTopics());
  }, [dispatch]);

  const renderLoading = () => {
    return <p>Loading...</p>;
  };

  const renderRow = (row) => {
    return (
      <div>
        <p>{row}</p>
        {/* <p>{row.description}</p> */}
      </div>
    );
  };

  if (!rowsById) {
    return renderLoading();
  }

  return (
    <div className="TopicsScreen">
      <ListView
        rowsIdArray={rowsIdArray}
        rowsById={rowsIdArray}
        renderRow={renderRow}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rowsById: TopicsSelectors.getTopicsByUrl(state),
    rowsIdArray: TopicsSelectors.getTopicsUrlArray(state),
  };
};

export default connect(mapStateToProps)(TopicsScreen);
