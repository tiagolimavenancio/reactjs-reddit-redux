import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as PostsActions from "../store/posts/actions";
import * as PostsSelectors from "../store/posts/reducer";
import * as TopicsSelectors from "../store/topics/reducer";
import ListView from "../components/ListView";
import ListRow from "../components/ListRow";
import TopicFilter from "../components/TopicFilter";
import PostView from "../components/PostView";
import "./PostsScreen.css";

function PostsScreen({
  postsById,
  postsIdArray,
  topicsByUrl,
  currentFilter,
  currentPost,
  dispatch,
}) {
  useEffect(() => {
    dispatch(PostsActions.fetchPosts());
  }, [dispatch]);

  const onRowClick = (postId) => {
    dispatch(PostsActions.selectPost(postId));
  };

  const onFilterChanged = (newFilter) => {
    dispatch(PostsActions.changeFilter(newFilter));
  };

  const renderLoading = () => {
    return <p>Loading...</p>;
  };

  const renderRow = (postId, post) => {
    const selected = currentPost === post;
    return (
      <ListRow rowId={postId} onClick={onRowClick} selected={selected}>
        {!post.thumbnail ? (
          false
        ) : (
          <img className="thumbnail" src={post.thumbnail} alt="thumbnail" />
        )}
        <h3>{post.title}</h3>
      </ListRow>
    );
  };

  if (!postsById) {
    return renderLoading();
  }

  return (
    <div className="PostsScreen">
      <div className="LeftPane">
        <TopicFilter
          className="TopicFilter"
          topics={topicsByUrl}
          selected={currentFilter}
          onChanged={onFilterChanged}
        />
        <ListView
          rowsIdArray={postsIdArray}
          rowsById={postsById}
          renderRow={renderRow}
        />
      </div>
      <div className="ContentPane">
        <PostView post={currentPost} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const [postsById, postsIdArray] = PostsSelectors.getPosts(state);
  return {
    postsById,
    postsIdArray,
    topicsByUrl: TopicsSelectors.getSelectedTopicsByUrl(state),
    currentFilter: PostsSelectors.getCurrentFilter(state),
    currentPost: PostsSelectors.getCurrentPost(state),
  };
};

export default connect(mapStateToProps)(PostsScreen);
