import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createSmurfs } from '../actions';


class SmurfAddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }
  
    addSmurf = event => {
      event.preventDefault();
      // add code to create the smurf using the api
     
     
     createSmurfs(this.state)
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
      return {
          smurfs: state
      }
  }
  
  export default connect(
      mapStateToProps,
      { createSmurfs }
  )(SmurfAddForm);

  
  