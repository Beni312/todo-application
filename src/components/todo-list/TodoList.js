import React from 'react'
import PropTypes from 'prop-types'
import { SortableContainer } from 'react-sortable-hoc';
import Todo from "../todo/Todo";
import './TodoList.css';

export const TodoList = SortableContainer((props) => {
  return (
    <ul className={"todoList list-group p-2"}>
      {props.items.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          handleStatusChange = {() => props.onStatusChange(todo.id)}
          handleRemove={props.onRemove}
          todo={todo}
        />
      ))}
    </ul>
  )
});

TodoList.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSortEnd: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default TodoList;
