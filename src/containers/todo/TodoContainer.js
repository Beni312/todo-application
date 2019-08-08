import * as actions from '../../actions/index';
import AddTodo from '../../components/add-todo/AddTodo';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TodoList from "../../components/todo-list/TodoList";
import { UndoRemoveDeletedItem } from "../../components/undo-remove-deleted-item/UndoRemoveDeletedItem";
import './TodoContainer.css';


class TodoContainer extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div className={"container todoContainer"}>
        <AddTodo/>
        <TodoList
          items={this.props.todos}
          onRemove={this.props.onRemove}
          onStatusChange={this.props.onStatusChange}
          onSortEnd={this.props.orderList}
          distance={1}
        />
        {this.props.deletedTodo && <UndoRemoveDeletedItem onUndoRemove={this.props.onUndoRemove}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    deletedTodo: !!state.todo.deletedTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStatusChange: (todoId) => dispatch(actions.updateStatus(todoId)),
    onRemove: (todoId) => dispatch(actions.deleteItem(todoId)),
    onUndoRemove: () => dispatch(actions.undoRemoveItem()),
    orderList: ({oldIndex, newIndex}) => {
      dispatch(actions.orderList(oldIndex, newIndex))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
