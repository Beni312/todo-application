import './Todo.css';
import PropTypes from 'prop-types'
import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { FaTrashAlt } from 'react-icons/fa';

export const Todo = SortableElement((props) => {
  return (
    <li className="todo list-group-item pt-4 pb-4">
    <span className={"todoDataContainer"}>
      <input name="status" className={"status"} type="checkbox" checked={props.todo.status}
             onChange={props.handleStatusChange}/>
      <span className={"px-4"}>{props.todo.name}</span>
      {props.todo.date && <span>{props.todo.date}</span>}
    </span>
      <span key={props.todo.id} className={"delete"} onClick={() => props.handleRemove(props.todo.id)}>
        <FaTrashAlt size={22} />
      </span>
    </li>
  )
}
);

Todo.propTypes = {
  handleStatusChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default Todo;
