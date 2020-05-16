import React from "react";
import _ from "lodash";

function TopicFilter({ topics, selected, className, onChanged }) {
  const renderFilter = (id, label) => {
    const _className = selected === id ? "selected" : undefined;
    return (
      <a
        key={id}
        href="#"
        className={_className}
        onClick={() => onFilterClick(id)}
      >
        {label}
      </a>
    );
  };

  const onFilterClick = (id) => {
    if (id === selected) return;

    if (typeof onChanged === "function") {
      onChanged(id);
    }
  };

  return (
    <div className={className}>
      {renderFilter("all", "All")}
      {_.map(topics, (topic, topicId) => renderFilter(topicId, topic.title))}
    </div>
  );
}

export default TopicFilter;
