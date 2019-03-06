import React, { Component } from 'react';
import Inputsfield from './Inputsfield.js';
import Subbutton from './Subbutton.js';
import Firststep from './FirstStep.js';
import axios from 'axios';


class Secondstep extends Component {
  constructor(props){
    super(props);
    this.state={
      Organization:'',
      imo:'',
      portname:'',
      Address1:'',
      Address2:'',
      city:'',
      location:'',
      state:'',
      country:'',
      pincode:''

    }
    this.updateInput = this.updateInput.bind(this);
  }
      updateInput =(event) =>{
        if(event.target.name ==="Organization Name")
        {
      this.setState({UserName : event.target.value});
        }
        else if(event.target.name ==="IMO No")
        {
      this.setState({Emailid : event.target.value});
        }
        if(event.target.name ==="Port Name")
        {
      this.setState({Password : event.target.value});
        }
        else if(event.target.name ==="Address1")
        {
      this.setState({ConfirmPassword : event.target.value});
        }
        else if(event.target.name ==="Address2")
        {
      this.setState({ConfirmPassword : event.target.value});
        }
        else if(event.target.name ==="City")
        {
      this.setState({ConfirmPassword : event.target.value});
        }
        else if(event.target.name ==="Location")
        {
      this.setState({ConfirmPassword : event.target.value});
        }
        else if(event.target.name ==="State")
        {
      this.setState({ConfirmPassword : event.target.value});
        }
        else if(event.target.name ==="Country")
        {
      this.setState({ConfirmPassword : event.target.value});
        }
        else if(event.target.name ==="Pincode")
        {
      this.setState({ConfirmPassword : event.target.value});
        }

      }

      onSubmit = () =>{
    //     axios.post('http://210.18.176.226:3000/api/createAdminOrg', this.state)
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
      }


  render() {
    return (
      <div  >
        <Inputsfield name ={"Organization Name"} type={"text"} value={this.state.Organization} Change={this.updateInput}/>
        <Inputsfield name ={"IMO No"} type={"text"} value={this.state.imo} Change={this.updateInput}/>
        <Inputsfield name ={"Port Name"} type={"text"} value={this.state.portname} Change={this.updateInput}/>
        <Inputsfield name ={"Address1"} type={"text"} value={this.state.Address1} Change={this.updateInput}/>
        <Inputsfield name ={"Address2"} type={"text"} value={this.state.Address2} Change={this.updateInput}/>
        <Inputsfield name ={"City"} type={"text"} value={this.state.city} Change={this.updateInput}/>
        <Inputsfield name ={"Location"} type={"text"} value={this.state.location} Change={this.updateInput}/>
        <Inputsfield name ={"State"} type={"text"} value={this.state.state} Change={this.updateInput}/>
        <Inputsfield name ={"Country"} type={"text"} value={this.state.country} Change={this.updateInput}/>
        <Inputsfield name ={"Pincode"} type={"text"} value={this.state.pincode} Change={this.updateInput}/>
        <label>
        <input type='checkbox' />
        <span>I Accept Terms&Conditions</span>
        </label>
        <Subbutton name={"Previous"} actions ={this.props.action}/>
        <Subbutton name={"Submit"} actions ={this.onSubmit} />
      </div>
    );
  }
}

export default Secondstep;
