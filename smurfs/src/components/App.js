import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSmurfs } from '../actions'

const App = props => {
  const fetchSmurfs = event => {
    event.preventDefault();
    props.getSmurfs();

  };
  return (
    <div>
      <h2>Something witty about Smurfs</h2>
      <div>
      
        {props.smurfs.map(smurf => (
          <h4>{smurf.name}</h4>
        ))}
      </div>
      <button onClick={fetchSmurfs}>Click here for Smurfs</button>
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
  
  
}
);

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
