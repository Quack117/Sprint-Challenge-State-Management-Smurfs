import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import { getSmurfs } from '../actions'

const Smurf = props => {
  const fetchSmurfs = event => {
    event.preventDefault();
    props.getSmurfs();

  };
  return (
    <div>
      <h2>Something about Smurfs</h2>
      <div>
      
        {props.smurfs.map(smurf => (
          
          <div>
          <h4>{smurf.name}</h4>
          <h4>{smurf.age}</h4>
          <h4>{smurf.height}</h4>
          </div>
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
)(Smurf);
