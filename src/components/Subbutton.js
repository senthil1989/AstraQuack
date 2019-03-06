import React, { Component } from 'react';
import './css/component.css';

const StepOne = props =>
{  console.log(props.actions);

    return (
      <button type="button" className='sub_btn' onClick={props.actions} >
        {props.name}
      </button>
    );
  
}

export default StepOne;