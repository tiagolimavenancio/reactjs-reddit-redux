import React from "react";
import _ from "lodash";

function ListView({ renderRow, rowsById, rowsIdArray }) {
  const renderRowThroughProps = (rowId) => {
    if (typeof renderRow === "function") {
      return renderRow(rowId, _.get(rowsById, rowId));
    }
  };

  const renderRowById = (rowId) => {
    return <li key={rowId}>{renderRowThroughProps(rowId)}</li>;
  };

  return <ul>{_.map(rowsIdArray, renderRowById)}</ul>;
}

export default ListView;
