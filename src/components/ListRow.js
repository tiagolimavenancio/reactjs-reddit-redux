import React from "react";

function ListRow({ selected, rowId, onClick, children }) {
  const backgroundColor = selected ? "#c0f0ff" : "#fff";

  const onSelected = () => {
    onClick(rowId);
  };

  return (
    <div style={{ backgroundColor }} onClick={onSelected}>
      {children}
    </div>
  );
}

export default ListRow;
