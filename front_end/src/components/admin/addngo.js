import React from "react";
import AdminNav from './Nav';
import ngo from '../img/ngo.jpg';
import './addngo.css';

const admin = {
    backgroundImage: 'url(' + ngo + ')',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
}

class Addngo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email : '',
          name : '',
          address : '',
          phone:'',
          cusemail:'',
          product:'',
      }
      this.handleNameChange=this.handleNameChange.bind(this)
      this.handleEmailChange=this.handleEmailChange.bind(this)
      this.handleAddressChange=this.handleAddressChange.bind(this)
      this.handlePhoneChange=this.handlePhoneChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCustomerEmailChange=this.handleCustomerEmailChange.bind(this)
      this.handleProductChange=this.handleProductChange.bind(this)
      this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this)
  }


  handleSubmit(event){
    event.preventDefault()
  }
  handleNameChange=event=>{
    this.setState({
      name : event.target.value
    });
  }

  handleEmailChange=event=>{
    this.setState({
      email: event.target.value
    });
  }

  handlePhoneChange=event=>{
    this.setState({
      phone: event.target.value
    });
  }

  handleAddressChange=event=>{
    this.setState({
      address: event.target.value
    });
  }

  handleProductChange=event=>{
    this.setState({
      product: event.target.value
    });
  }

  handleCustomerEmailChange=event=>{
    this.setState({
      cusemail: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    var body = {
        email : this.state.email,
        ngo : this.state.name,
        address : this.state.address,
        phone:this.state.phone
    }
    console.log(body);
    if(this.state.name==""){
      alert('Please enter the name')
    }
    else if(this.state.email==""){
      alert('Please enter the email')
    }
    else if(this.state.phone==""){
      alert('Please enter the phone')
    }
    else if(this.state.address==""){
      alert('Please enter the address')
    }
    else{
    
      const url = "http://localhost:9000/addngo";
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
      })
      .then(response => {if(response.ok){
        alert('NGO Details submitted');
      }
      })
    }
  }


  handleCustomerSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    var body = {
        email : this.state.cusemail,
        search: this.state.product,
    }
    console.log(body);
    if(this.state.cusemail==""){
      alert('Please enter the email')
    }
    else if(this.state.product==""){
      alert('Please enter the product to search')
    }
    
    else{
    
      const url = "http://localhost:9000/addsearch";
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
      })
      .then(response => {if(response.ok){
        alert('Requested Search Details for products submitted');
      }
      })
    }
  }


  render() {
    return (
      
      <div style={admin} class="adminmain">
          <AdminNav/>
          <div>
          <form>
              <div class="adminc">

                <h1>ADDING NGO FORM..</h1>
                
                <label for="ngo" class="addlabel"><b>NGO Name  :&nbsp;&nbsp;</b></label>
                <div><input type="text" placeholder="ngo name" name="ngo" value={this.state.name} onChange={this.handleNameChange} required/></div>

                <label for="email" class="addlabel"><b>Email Address :</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={ this.state.email } onChange = { this.handleEmailChange } required/>

                <label for="phno" class="addlabel"><b>Phone number :</b></label>
                <input type="text" placeholder="phone number.." name="phno" value={ this.state.phone } onChange = { this.handlePhoneChange } required/>

                <label for="addr" class="addlabel"><b>Address :</b></label>
                <textarea placeholder="Enter NGO address" name="addr" value={ this.state.address} onChange = { this.handleAddressChange } required></textarea>
          
                <center>
                  <button type="submit" class="addbtn" name="add" onClick={this.handleSubmit.bind(this)}>Add NGO</button>
                </center>
              </div>
  
            </form>
            </div>
            <div>
            <form>
              <div class="adminreq">

                <h1>CUSTOMER REQUEST FORM..</h1>
                
                

                <label for="email" class="addlabel"><b>Email Address :</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={ this.state.customeremail } onChange = { this.handleCustomerEmailChange } required/>

                <label for="product" class="addlabel"><b>Requested Product :</b></label>
                <input type="text" placeholder="products.." name="product" value={ this.state.product } onChange = { this.handleProductChange } required/>

                
          
                <center>
                  <button type="submit" class="addbtn" name="add" onClick={this.handleCustomerSubmit.bind(this)}>Add CustomerRequest</button>
                </center>
              </div>
  
            </form>
            </div>
        </div>
     
      );
  }
}
export default Addngo