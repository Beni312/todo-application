import PropTypes from "prop-types";
import React from "react";

export const UndoRemoveDeletedItem = (props) => {
  return (
    <div className={"row d-flex justify-content-center mt-5"}>
      <button className={"undoRemoveDeleteBtn btn btn-primary"} onClick={props.onUndoRemove}>Undo remove deleted todo</button>
    </div>
  )
};

UndoRemoveDeletedItem.propTypes = {
  onUndoRemove: PropTypes.func.isRequired
};
