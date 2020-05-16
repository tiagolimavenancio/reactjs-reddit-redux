import React from "react";
import _ from "lodash";

function ListView({ renderRow, rowsById, rowsIdArray }) {
  const renderRowById = (rowId) => {
    return <li key={rowId}>{renderRow(rowId, _.get(rowsById, rowId))}</li>;
  };

  return <ul>{_.map(rowsIdArray, renderRowById)}</ul>;
}

export default ListView;
