import React from "react";
import CNav from './Nav';
import './c_home.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Sidenav from "./sidenav"
import swal from 'sweetalert';

var id,s1,s2,cid;
const donor ={
  width: '100%',
  height: '100%',
  // backgroundColor: '#dcdcdc',
}
class productalone extends React.Component {
    constructor(props) {
      super(props);
        id=this.props.match.params.id;
        cid=sessionStorage.getItem("id");
      console.log(id)
      this.state={
        cp:[],
        aprice:null,
        reqquant:null,
        email:null,
        name:"Name",
        feedback:"Thanks For buying"
        
      }
      this.reqquant = this.reqquant.bind(this)
      this.aprice = this.aprice.bind(this)
      this.buyproduct = this.buyproduct.bind(this)
      this.cart = this.cart.bind(this)
    }

    reqquant=event=>{
      this.setState({
        reqquant: event.target.value
      });
    }
    aprice=event=>{
      this.setState({
        aprice: event.target.value
      });
      
    }

    componentDidMount(){
      this.singleProduct();
      this.getEmail();
    }

    getEmail(){
      const url = "http://localhost:9000/getEmail";
       var body={id:sessionStorage.getItem("id")}
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');

        headers.append('Access-Control-Allow-origin',url);
        headers.append('Access-Control-Allow-Credentials','true');

        headers.append('POST','GET');
        
         fetch(url,{
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
            })
            .then(response =>{return response.json()})
            .then(res=>{this.setState({email:res.email})
            console.log(this.state.email,typeof(this.state.email))
            

                
        })
    }
    singleProduct(){
      const url = "http://localhost:9000/singleproduct";
       var body={id:id}
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');

        headers.append('Access-Control-Allow-origin',url);
        headers.append('Access-Control-Allow-Credentials','true');

        headers.append('POST','GET');
        
         fetch(url,{
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
            })
            .then(response =>{return response.json()})
            .then(res=>{this.setState({cp:res})
            console.log(this.state.cp)
            
            console.log(s1,s2)
                
        })
    }
    buyproduct(event){
      event.preventDefault();
      console.log(this.state.reqquant,this.state.aprice)
      console.log(this.state.cp.quant)
      if(this.state.aprice < this.state.cp.nprice)
        {
          swal({
            title: "Agreed price Warning",
            text: "Entered agreed price should be greater than or equal to nominal price",
            icon: "warning",
            button: "Ok",
          });
        }
      else if(this.state.reqquant > this.state.cp.quant)
        {
          swal({
            title: "Required Quantity Warning",
            text: "Entered quantity should be less than or equal to availability",
            icon: "warning",
            button: "Ok",
          });
        }
      else{
        var body = {
            pid: id,
            cid: cid,
            aprice: this.state.aprice,
            quant: this.state.cp.quant,
            nquant: this.state.reqquant,
        }
        const url = "http://localhost:9000/buyproduct";
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
          const templateId = 'template_zWkPNL9Z';

          this.sendFeedback(templateId, { from_name: this.state.cp.pname, email: this.state.email})

           // alert("Details submitted.. Thank You For Purchasing..");
           swal({
            title: "Purchase Successful",
            text: "Purchased selected product Successfully!!!",
            icon: "success",
            button: "Ok",
          }).then(function(){
            window.location.reload(false);
          });
            
          }
        })
        
      }
    }

    sendFeedback (templateId, variables) {
      window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
         // alert('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
     // window.location.reload(false);
    }

    cart(event){
      event.preventDefault();
      console.log(this.state.reqquant,this.state.aprice)
      console.log(this.state.cp.quant)
      //console.log(this.state.cp.quant)
      if(this.state.aprice < this.state.cp.nprice)
        {
          swal({
            title: "Agreed price Warning",
            text: "Entered agreed price should be greater than or equal to nominal price",
            icon: "warning",
            button: "Ok",
          });
        }
      else if(this.state.reqquant > this.state.cp.quant)
        {
          swal({
            title: "Required Quantity Warning",
            text: "Entered quantity should be less than or equal to availability",
            icon: "warning",
            button: "Ok",
          });
        }
      else{
        var body = {
            pid: id,
            cid: cid,
            aprice: this.state.aprice,
            quant: this.state.cp.quant,
            nquant: this.state.reqquant,
        }
        const url = "http://localhost:9000/cartproduct";
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
          swal({
            title: "Added to Cart",
            text: "Product is added to cart",
            icon: "success",
            button: "Ok",
          }).then(function(){
            window.location.reload(false);
          });
          }
        })
        
      }
    }

  
    render() {
      s1='/productimages/'+this.state.cp.img1
      s2='/productimages/'+this.state.cp.img2
      return (
        <div style={donor} class="main">
                <CNav/>
                <Sidenav/>
                <div class="productalone">
                <h2><b>{this.state.cp.pname}</b></h2><br/>
                    <div className="div_left">
                        
                        <img src={s1} width="600px" height="600px"/><br/><br/>
                        {/* <img src={s2} width="400px" height="400px"/> */}
                    </div>
                    
                    <div class="div_right">
                      
                      <table class="productalonetable">
                        <tr><td><h3>Nominal Price </h3></td><td><h3><h5 class="cost">Rs {this.state.cp.cost}</h5>Rs.{this.state.cp.nprice}</h3></td></tr>
                        <tr><td><h3>Availabitlity </h3></td><td><h3>{this.state.cp.quant}</h3></td></tr>
                        <tr><td><h3>Description </h3></td><td><h3>{this.state.cp.des}</h3></td></tr> 
                        <tr><td><h3>Year of Purchase </h3></td><td><h3>{this.state.cp.year}</h3></td></tr> 
                        <tr><td><h3>Required Quantity </h3></td><td><h3><input type="text" class="producttext" value={this.state.reqquant} onChange={this.reqquant} required/></h3></td></tr> 
                        <tr><td><h3>Agreed price </h3></td><td><h3><input type="text" class="producttext" value={this.state.aprice} onChange={this.aprice} required/></h3></td></tr>
                        <button className="productalonebtn" onClick={this.buyproduct}>BuyProduct</button>&nbsp;&nbsp;&nbsp;
                        <button className="productalonebtn" onClick={this.cart}>AddToCart</button>
                      </table>
                      
                    </div>
                </div>
        </div>
        
      );
    }
  }
  
  export default productalone;
  