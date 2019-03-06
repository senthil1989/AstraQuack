import React, { Component } from 'react';
import Firststep from './FirstStep.js';
import Secondstep from './Secondstep.js';
import Subbutton from './Subbutton.js';

class Forminfo extends Component {
    constructor(props){
    super(props);
    this.state={
        steps:1,
        email:'',
        password:'',
        data:null,
    }
        this.nextstep = this.nextstep.bind(this);
        
    }
componentDidMount(){
    fetch('http://210.18.176.226:3000/api/getAllPort')
    .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log(this.state.data);
    
}
    
nextstep= () =>{
    const {steps} = this.state;
    this.setState({steps:steps+1});
    console.log(steps);
}

prevstep= () =>{
    const {steps} = this.state;
    this.setState({steps:steps-1});
}

        
  render() {
      const {steps} = this.state; 
    if(steps === 1)
    {
       return  <Firststep action={this.nextstep}/>
    }
    else if(steps === 2) 
        {
         return  <Secondstep action={this.prevstep}/> 

  }
}
  }

export default Forminfo;
