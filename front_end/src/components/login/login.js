import React from "react";
import UserProfile from '../donor/UserProfile';
import swal from 'sweetalert';




export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email : '',
      password : ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)

    this.handledonateSubmit = this.handledonateSubmit.bind(this)
    this.handlepurchaseSubmit = this.handlepurchaseSubmit.bind(this)
    this.handleadminSubmit = this.handleadminSubmit.bind(this)
  }
  
  handleEmailChange=event=>{
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange=event=>{
    this.setState({
      password: event.target.value
    });
  }

  handledonateSubmit(event){
    event.preventDefault();
    console.log(this.state)
     var body = {
      email : this.state.email,
      password : this.state.password,
    }
    console.log(body);
    if(this.state.email==""){
      swal({
        title: "Name",
        text: "Please enter your Name",
        icon: "error",
        button: "ok",
      });

    }
    else if(this.state.password==""){
      swal({
        title: "Password",
        text: "Please enter your password",
        icon: "error",
        button: "ok",
      });
    }
    
    else{
        const url = "http://localhost:9000/login";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
          }).then(response => 
            response.json().then(data => ({
                data1: (data)
            })
        ).then(res => {
            var id=res.data1.id;
            console.log(id);
            sessionStorage.setItem("id",id)
            window.location.href='/donorhome';
            })).catch(error=>{ swal({
              title: "Login",
              text: "Invalid Donor",
              icon: "error",
              button: "ok",
            });});
  
          }
          }
    handlepurchaseSubmit(event){
      
      event.preventDefault();
    console.log(this.state)
     var body = {
      email : this.state.email,
      password : this.state.password,
    }
    console.log(body);
    if(this.state.email==""){
      swal({
        title: "Name",
        text: "Please enter your Name",
        icon: "error",
        button: "ok",
      });

    }
    else if(this.state.password==""){
      swal({
        title: "Password",
        text: "Please enter your password",
        icon: "error",
        button: "ok",
      });
    }
    
    else{
        const url = "http://localhost:9000/login";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
          }).then(response => 
            response.json().then(data => ({
                data1: (data)
            })
        ).then(res => {
            var id=res.data1.id;
            console.log(id);
            sessionStorage.setItem("id",id)
            window.location.href='/chome';
            })).catch(error=>{swal({
              title: "Login",
              text: "Invalid Login Credentials",
              icon: "error",
              button: "ok",
            });});
  
          }
    }
    handleadminSubmit(event){
      event.preventDefault();
      if(this.state.email=="admin@gmail.com" && this.state.password=="admin")
          window.location.href = '/validate'
      else  
      swal({
        title: "Login",
        text: "Invalid Admin",
        icon: "error",
        button: "ok",
      });
    }
          

  render() {
    return (
      <form className="loginform">
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={ this.state.email } onChange = { this.handleEmailChange } required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={ this.state.password} onChange = { this.handlePasswordChange } required/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={this.handledonateSubmit.bind(this)}> 
            Donate  
          </button><br/><br/>
          <button type="submit" className="btn" onClick={this.handlepurchaseSubmit.bind(this)}>
            Purchase
          </button><br/><br/>
          <button type="submit" className="btn" onClick={this.handleadminSubmit.bind(this)}>
            Admin
          </button><br/><br/><br/>
          <a href="/home"><u>back</u></a>
        </div>
        
      </div>
     
      </form>
    );
  }
}

