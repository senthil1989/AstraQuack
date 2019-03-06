import React, { Component } from 'react';

const Inputsfield = props =>
{
  
    return (
      <input type={props.type} name={props.name} placeholder={props.name} onChange={props.Change} />
    );
  
}

export default Inputsfield;