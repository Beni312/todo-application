import * as actionTypes from './actionTypes';

export const addItem = (name, date) => {
  let payloadDate = null;
  if (date) {
    payloadDate = date.toISOString().slice(0, 10);
  }
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      name: name,
      date: payloadDate
    }
  }
};

export const deleteItem = id => ({
  type: actionTypes.DELETE_ITEM,
  payload: {
    id: id
  }
});

export const undoRemoveItem = () => ({
  type: actionTypes.UNDO_REMOVE_DELETED_TODO
});

export const orderList = (oldIndex, newIndex) => ({
  type: actionTypes.ORDER_LIST,
  payload: {
    oldIndex: oldIndex,
    newIndex: newIndex
  }
});

export const updateStatus = (id, status) => ({
  type: actionTypes.UPDATE_STATUS,
  payload: {
    id: id,
    status: status
  }
});

