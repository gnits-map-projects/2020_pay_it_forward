import React from "react";
import swal from 'sweetalert';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validNameRegex=RegExp(/^[a-zA-Z0-9]{10,}$/);
const validPhoneRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);

export class Register extends React.Component {


 
  constructor(props) {
    super(props);
      
    this.state={
      
      email : '',
      password : '',
      name : '',
      address : '',
      phone:'',
      errors:{
        name:'',
        email:'',
        phone:'',
        address:'',
        password:''

      },
      e:false,
      p:false,
      ph:false,
      n:false


    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleEmailChange=this.handleEmailChange.bind(this)
    this.handleAddressChange=this.handleAddressChange.bind(this)
    this.handlePhoneChange=this.handlePhoneChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }
  
  handleSubmit(event){
    event.preventDefault()
  }
  handleNameChange=event=>{
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.name = 
          validNameRegex.test(value)
            ? ''
            : 'Name is not valid!Minimum 10 characters..only alphanumerics allowed';
    if(errors.name ==  '')
      {
         this.setState({n : true});
     }
    this.setState({errors, [name]: value});
  }

  handlePasswordChange=event=>{
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.password = 
    value.length < 8
      ? 'Password must be 8 characters long!'
      : '';
    if(errors.password ==  '')
      {
        this.setState({p : true});
      }
    this.setState({errors, [name]: value});
  }

  handleEmailChange=event=>{
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
    if(errors.email ==  '')
      {
         this.setState({e : true});
     }
    this.setState({errors, [name]: value});
  }

  handlePhoneChange=event=>{
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.phone = 
          validPhoneRegex.test(value)
            ? ''
            : 'phone number is not valid!';
    if(errors.phone ==  '')
      {
         this.setState({ph : true});
     }
    this.setState({errors, [name]: value});
  }

  handleAddressChange=event=>{
    this.setState({
      address: event.target.value
    });
  }


  handleSubmit(event) {
    
    
    event.preventDefault();
    console.log(this.state)
     var body = {

      email : this.state.email,
      password : this.state.password,
      username : this.state.name,
      address : this.state.address,
      phone:this.state.phone
    
    }
    console.log(body);
    if(this.state.name==""){
      swal({
        title: "Name",
        text: "Please Enter your Name",
        icon: "error",
        button: "ok",
      });

    }
    else if(this.state.password==""){
      swal({
        title: "Password",
        text: "Please Enter the Password",
        icon: "error",
        button: "ok",
      });
    }
    else if(this.state.email==""){
      swal({
        title: "E-mail",
        text: "Please Enter your E-mail",
        icon: "error",
        button: "ok",
      });
    }
    else if(this.state.phone==""){
      swal({
        title: "Phone",
        text: "Please Enter your Phone number",
        icon: "error",
        button: "ok",
      });
    }
    else if(this.state.address==""){
      swal({
        title: "Address",
        text: "Please Enter your Name",
        icon: "error",
        button: "ok",
      });
    }
    else{
    

  const url = "http://localhost:9000/person";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('POST','GET');
    if(this.state.n == true && this.state.e == true && this.state.ph == true && this.state.p == true)
   {
     console.log("in if")
      fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    }).then(response => {if(response.ok){
      swal({
        title: "Registration",
        text: "Successfully Registered",
        icon: "success",
        button: "ok",
      });
    }
    })
 .catch((error)=> {
   console.error(error) ;
   swal({
    title: "Registration",
    text: "E-mail Already exists",
    icon: "error",
    button: "ok",
  });
  })
  
  }
}
}



  
  
  
  render() {
    const {errors} = this.state;
    return (
      <div>
      <form>
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group row">
              <label htmlFor="name">Name</label>
              <input type="text" class="form-control" name="name" placeholder="name" value={ this.state.name } onChange = { this.handleNameChange } required/>
              <span className='error'>{errors.name}</span>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={ this.state.password} onChange = { this.handlePasswordChange } required/>
              <span className='error'>{errors.password}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={ this.state.email } onChange = { this.handleEmailChange } required/>
              <span className='error'>{errors.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" placeholder="phone" value={ this.state.phone } onChange = { this.handlePhoneChange } required/>
              <span className='error'>{errors.phone}</span>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" placeholder="address" value={ this.state.address} onChange = { this.handleAddressChange } required/>
              
            </div>
          </div>
        </div>
        
          <button type="submit" onClick = {this.handleSubmit} className="btn">
            Register
          </button>
          <br/>
          {/* <a href="/home"><u>back</u></a> */}
        
      </div>
      </form>
     
      </div>
      
    );
  }
}

