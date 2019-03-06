import React, { Component } from 'react';
import Inputsfield from './Inputsfield.js';
import Subbutton from './Subbutton.js';


class Firststep extends Component {
    constructor(props) {
    super(props);
        this.state={
            UserName:'',
            Emailid:'',
            Password:'',
            ConfirmPassword:''
        }
      this.updateInput = this.updateInput.bind(this);
    }
        updateInput =(event) =>{
          if(event.target.name ==="User Name")
          {
        this.setState({UserName : event.target.value});
          }
          else if(event.target.name ==="Email ID")
          {
        this.setState({Emailid : event.target.value});
          }
          if(event.target.name ==="Password")
          {
        this.setState({Password : event.target.value});
          }
          else if(event.target.name ==="Confirm Password")
          {
        this.setState({ConfirmPassword : event.target.value});
          }

        }
  render() {

    return (
      <div  >
        <Inputsfield name ={"User Name"} type={"text"} value={this.state.UserName} Change={this.updateInput}/>
        <Inputsfield name ={"Email ID"} type={"Email"} value={this.state.Emailid} Change={this.updateInput}/>
        <Inputsfield name ={"Password"} type={"password"} value={this.state.Password} Change={this.updateInput}/>
        <Inputsfield name ={"Confirm Password"} type={"password"} value={this.state.ConfirmPassword} Change={this.updateInput}/>
        <Subbutton name={"Next"} actions ={this.props.action}/>
      </div>
    );
  }
}

export default Firststep;
