import React from "react";
import Nav from './Nav'
import login_img from './img/login_img.jpeg';
import pitimg1 from './img/pitimg1.jpg';
import './Nav.css';
import './Home.css';


const home = {
    backgroundImage: 'url(' + login_img + ')',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      msg:'',
    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleEmailChange=this.handleEmailChange.bind(this)
    this.handleMsgChange=this.handleMsgChange.bind(this)
    this.handlePhoneChange=this.handlePhoneChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
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
  handleMsgChange=event=>{
    this.setState({
      msg: event.target.value
    });
  }

  handleSubmit(event) {
    
    event.preventDefault();
    console.log(this.state)
     var body = {

      email : this.state.email,
      username : this.state.name,
      phone:this.state.phone,
      msg: this.state.msg,
    
    }
    console.log(body);
    
    

  const url = "http://localhost:9000/feedback";
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
    }).then(response => {if(response.ok){
      alert('Feedback Details submitted');
    }
    })
  
}


  render() {
    return (
      <div style={home}>
          <Nav/>
            <div class="image11">
                <a class="btn" href="/login"><span>Register/Login</span></a>
            </div>
            <div id="about">
                  <center><h1 class="contentHead">ABOUT..Pay It Forward</h1></center>
                    <p><img src={pitimg1} class="imageabout" alt="about"/><br/><br/><h2>
                          Hi Donor/Customer,<br/>Pay It Forward is a platform to raise funds for NGO's. It is a website for donors and customers, where donors donate products which they are not in need of.
                           These products are kept on sale for customers to buy at nomial price. And the money is transfered to the specific NGO choosen by Donor. <br/>So likely the idea of Pay It Forward is fulfilled..
                        </h2></p>
            </div>
                    

             
            <div id="contact"> 
                <center><h1 class="contentHead">CONTACT US</h1></center>
                <form class="contactform">
                  <input id="text" type="text" placeholder="Name..." name="name" value={ this.state.name } onChange = { this.handleNameChange }/>
                  <input id="text" type="text" placeholder="Email.." name="email" value={ this.state.email } onChange = { this.handleEmailChange }/>
                  <input id="text" type="text" placeholder="Phone Number.." name="phone" value={ this.state.phone } onChange = { this.handlePhoneChange }/>
                  <textarea cols="20" rows="10" id="textarea" placeholder="Message.." name="msg" value={ this.state.msg } onChange = { this.handleMsgChange }></textarea><br/><br/>
                  <button type="submit" id="submit" onClick={this.handleSubmit}>Submit</button>
                </form>               
            </div>
            <br/><br/><br/>
          
      </div>
    );
  }
}


export default Home
