import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './AddTodo.css';

export class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: null,
      errors: {
        nameError: ''
      }
    };
  }

  nameChangedHandler = (event) => {
    if (event.target.value.length > 0) {
      this.setState({errors: {nameError: ''}})
    }
    this.setState({name: event.target.value})
  };

  dateChangedHandler = (date) => {
    this.setState({date: date});
  };

  render() {
    return (
      <div className={"mb-3 mt-3"}>
        <form id={"addTodoForm"} onSubmit={this.submitHandler} className={"row"} noValidate>
          <div className={"col-md-5 mb-3"}>
            <label htmlFor="name">Name</label>
            <input autoComplete="off" name="name" className={"form-control"} id={"name"} value={this.state.name} onChange={this.nameChangedHandler} type="text"/>
            <div style={{ fontSize: 15, color: "red", position: 'absolute' }}>
              {this.state.errors.nameError}
            </div>
          </div>

          <div className={"col-md-3 mb-3"}>
            <label htmlFor="date">Date</label>
            <DatePicker
              className={"form-control"}
              selected={this.state.date}
              onChange={this.dateChangedHandler}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <button className={"btn btn-primary mt-3"} type="submit">Add todo</button>
        </form>
      </div>
    )
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (!this.state.name) {
      this.setState({errors: {nameError: 'Missing input field'}});
      return;
    }

    this.setState({
      name: '',
      date: null
    });
    this.props.onSubmit( this.state.name, this.state.date);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, date) => dispatch(actions.addItem(name, date))
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
