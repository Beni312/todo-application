import * as actionTypes from '../actions/actionTypes';
import { arrayMove } from "react-sortable-hoc";
import uuid from 'uuid/v1';

const stateFromLocalStorage = JSON.parse(localStorage.getItem('state'));

const initialState = stateFromLocalStorage ? stateFromLocalStorage : {
  todos: [],
  deletedTodo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      return saveState({
        ...state,
        todos: [...state.todos, {
          id: uuid(),
          name: action.payload.name,
          date: action.payload.date,
          status: false
        }]
      });
    }
    case actionTypes.DELETE_ITEM: {
      const deletedTodo = state.todos.find(item => item.id === action.payload.id);
      return saveState({
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.id),
        deletedTodo: deletedTodo
      });
    }
    case actionTypes.UPDATE_STATUS: {
      return saveState({
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ?
          {...todo, status: !todo.status} :
          todo
        )
      });
    }
    case actionTypes.UNDO_REMOVE_DELETED_TODO: {
      return saveState({
        ...state,
        todos: [...state.todos, state.deletedTodo],
        deletedTodo: null
      });
    }
    case actionTypes.ORDER_LIST: {
      return saveState({
        ...state,
        todos: arrayMove(state.todos, action.payload.oldIndex, action.payload.newIndex)
      });
    }
    default: {
      return state
    }
  }
};

export const saveState = (newState) => {
  localStorage.setItem('state', JSON.stringify(newState));
  return newState;
};

export default reducer;
