import React from "react";
import donorhome from '../img/donorhome.jpg';
import './d_home.css';
import './Nav.css';
import pit from '../img/pit.jpg';

var eid,profile,image1,image2,message,ngo,s;

const donor ={
    backgroundImage: 'url(' + donorhome+ ')',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
}

class Donor extends React.Component {

    constructor(props) {
      super(props);
      this.state= {
          ngo:[],
          
      }

    
    this.difproChange = this.difproChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sngoChange=this.sngoChange.bind(this)
    
    eid=sessionStorage.getItem("id")
    profile="/donorprofile";
    console.log(sessionStorage.getItem("id"))
  }

  componentDidMount(){
     console.log("In cdm")
      const url = "http://localhost:9000/ngos";
      
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
      
      headers.append('Access-Control-Allow-origin',url);
      headers.append('Access-Control-Allow-Credentials','true');
    
      headers.append('POST','GET');

  fetch(url,{
          headers:headers,
          method: 'GET',
      })
      .then(response=>
      {                
          return response.json()
      }).then((res)=>{
                   this.setState({ngo:res})
                 //  console.log(typeof(this.sate.ngo))
                  //  console.log(this.sate.ngo),
                  //  console.log(this.sate.ngo[0]),
                  //  console.log(this.sate.ngo[1])
                })          
  }
  dd()
  {
    let s=this.state.ngo;
    
    return s.map((song) => {
       return (
       <option value={song}>{song}</option>
       );
   });  
  }  

   

  

  sngoChange=event=>{
    sessionStorage.setItem("sngo",event.target.value)
  }

  

  difproChange=event=>{
    sessionStorage.setItem("difpro",event.target.value)
  }

  
  dateChange=event=>{
    sessionStorage.setItem("date",event.target.value)
  }
  
   
  handleSubmit(event) {
    sessionStorage.setItem("step",1)
    event.preventDefault();
    window.location.href="/donorproduct";
  }
  render() {
    
    return (
      <div style={donor} class="main">
          <div class="home">
            <div class="nav">
                <ul>
                    <li><a class="active" href="/"><img alt="sorry" height="67px" width="190px" src={pit}/></a></li>
                    <li><a class="links" href="/login">LogOut</a></li>
                    <li><a class="links" href={profile}>MyProfile</a></li>
                    <li><a class="links" href="/dproducts">Donated Products</a></li>
                    <li><a class="links" href="/donorhome">Donate</a></li>
                </ul>
            </div>  
          </div>
          <div class="container">
                Welcome..<br/><br/>
                <form>
                  
                  
                  
                  <div class="row">
                    
                    <div class="col-25">
                      <label for="date">Expected date of delievery</label>
                    </div>
                    <div class="col-75">
                      <input type="date" name="date" onChange={this.dateChange} required/>
                    </div>
                    
                    </div>
                    <div class="row">
                    
                    <div class="col-25">
                      <label for="ngo">Select NGO to donate</label>
                    </div>
                    <div class="col-75">
                      <select id="ngo" name="ngo" onChange={this.sngoChange} required>
                        <option>Select ngo</option>
                         {this.dd()}
                      </select>
                    </div>
                  <br/>
                  </div>
                  <div class="row">
                  <div class="col-25">
                      <label for="date">Number of different products</label>
                    </div>
                    <div class="col-75">
                      <input type="text" name="date" onChange={this.difproChange} required/>
                    </div>
                      </div> <br/> <br/>
                  <div class="row"><center>
                    <button type="submit" class="submit" onClick={this.handleSubmit.bind(this)} value="Submit">Submit And Add Product</button></center>
                  </div>
                </form>
                <div>
                  <h2>{message}</h2>
                </div>
                
        </div>
      </div>
    );
  }
}
export default Donor
