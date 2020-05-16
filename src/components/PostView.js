import React from "react";

function PostView({ post }) {
  const _isImage = (url) => {
    if (!url) return false;
    return url.endsWith(".jpg") || url.endsWith(".gif") || url.endsWith(".png");
  };

  const renderImage = () => {
    return <img src={post.url} alt={post.title} />;
  };

  const renderBody = () => {
    return <div>{post.body}</div>;
  };

  const renderEmpty = () => {
    return (
      <div>
        <h3>Select a post to view</h3>
      </div>
    );
  };

  const renderUrl = () => {
    return (
      <div>
        <h3>External Link</h3>
        <a href={post.url} target="_blank">
          Open
        </a>
      </div>
    );
  };

  if (!post) return renderEmpty();
  if (post.body) return renderBody();
  else if (_isImage(post.url)) return renderImage();
  else return renderUrl();
}

export default PostView;
