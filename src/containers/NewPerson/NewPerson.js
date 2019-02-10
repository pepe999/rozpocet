import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addPerson: person => dispatch(addPerson(person))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      amount: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
     this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, amount } = this.state;
    this.props.addPerson({ name, amount });
    this.setState({ name: "",
                    amount: "" });
  }
  render() {
    const { name, amount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Jméno</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Částka</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const NewPerson = connect(null, mapDispatchToProps)(ConnectedForm);
export default NewPerson;