import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as TopicsActions from "../store/topics/actions";
import * as TopicsSelectors from "../store/topics/reducer";
import ListView from "../components/ListView";
import ListRow from "../components/ListRow";
import "./TopicsScreen.css";

function TopicsScreen({
  topicsByUrl,
  topicsUrlArray,
  selectedTopicsByUrl,
  canFinalizeSelection,
  dispatch,
}) {
  useEffect(() => {
    dispatch(TopicsActions.fetchTopics());
  }, [dispatch]);

  const renderLoading = () => {
    return <p>Loading...</p>;
  };

  const renderRow = (topicUrl, topic) => {
    const selected = selectedTopicsByUrl[topicUrl];
    return (
      <ListRow rowId={topicUrl} selected={selected} onClick={onRowClick}>
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
      </ListRow>
    );
  };

  const onRowClick = (topicUrl) => {
    dispatch(TopicsActions.selectTopic(topicUrl));
  };

  const onNextScreenClick = () => {
    dispatch(TopicsActions.finalizeTopicSelection());
  };

  if (!topicsByUrl) {
    return renderLoading();
  }

  return (
    <div className="TopicsScreen">
      <h3>Choose 3 topics of interest</h3>
      <ListView
        rowsIdArray={topicsUrlArray}
        rowsById={topicsByUrl}
        renderRow={renderRow}
      />
      {!canFinalizeSelection ? (
        false
      ) : (
        <button className="NextScreen" onClick={onNextScreenClick} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const [topicsByUrl, topicsUrlArray] = TopicsSelectors.getTopics(state);
  return {
    topicsByUrl,
    topicsUrlArray,
    selectedTopicsByUrl: TopicsSelectors.getSelectedTopicsByUrl(state),
    canFinalizeSelection: TopicsSelectors.isTopicSelectionValid(state),
  };
};

export default connect(mapStateToProps)(TopicsScreen);
