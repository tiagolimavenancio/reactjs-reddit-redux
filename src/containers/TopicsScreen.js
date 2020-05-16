import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as TopicsActions from "../store/topics/actions";
import * as TopicsSelectors from "../store/topics/reducer";
import ListView from "../components/ListView";
import ListRow from "../components/ListRow";
import "./TopicsScreen.css";

function TopicsScreen({ rowsById, rowsIdArray, selectedIdsMap, dispatch }) {
  useEffect(() => {
    dispatch(TopicsActions.fetchTopics());
  }, [dispatch]);

  const renderLoading = () => {
    return <p>Loading...</p>;
  };

  const renderRow = (rowId, row) => {
    const selected = selectedIdsMap[rowId];
    return (
      <ListRow rowId={rowId} selected={selected} onClick={onRowClick}>
        <h3>{row.title}</h3>
        <p>{row.description}</p>
      </ListRow>
    );
  };

  const onRowClick = (rowId) => {
    dispatch(TopicsActions.selectTopic(rowId));
  };

  if (!rowsById) {
    return renderLoading();
  }

  return (
    <div className="TopicsScreen">
      <ListView
        rowsIdArray={rowsIdArray}
        rowsById={rowsById}
        renderRow={renderRow}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rowsById: TopicsSelectors.getTopicsByUrl(state),
    rowsIdArray: TopicsSelectors.getTopicsUrlArray(state),
    selectedIdsMap: TopicsSelectors.getSelectedTopicUrlsMap(state),
  };
};

export default connect(mapStateToProps)(TopicsScreen);
