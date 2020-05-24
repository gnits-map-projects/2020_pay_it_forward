import React from 'react';
import './Nav.css';
import pit from '../img/pit.jpg';
import { BrowserRouter as Router, Redirect} from "react-router-dom";



class CNav extends React.Component {
    constructor(props){
        super(props);
        this.state={
            search:null
        }
        this.searchProducts= this.searchProducts.bind(this)
        this.search=this.search.bind(this)
    }
    
    search(event){
        this.setState({
            search: event.target.value
          });
          
    }
    searchProducts(event){
        event.preventDefault();
        console.log(this.state.search);
        let s=this.state.search;
        console.log(s)
        sessionStorage.setItem("search",s);
        if(sessionStorage.getItem("search")!=null)
            window.location.href='/csearch';
    }
    render() {
    return (<Router>
        <div class="home">
            <div class="nav">
                <ul>
                <li><a class="active" href="/"><img alt="sorry" height="67px" width="190px" src={pit}/></a></li>
                    <li><a class="links" href="/login">LogOut</a></li>
                    <li><a class="links" href="/cart">MyCart</a></li>
                    <li><a class="links" href="/profile">MyProfile</a></li>
                    <li><a class="links" href="/products">MyProducts</a></li>
                    <li><a class="links" href="/chome">Home</a></li>
                    <li><input type="text" name="search" placeholder="Search products.." value={this.state.search} onChange={this.search} class="searchlink" onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.searchProducts(event)
                }
              }}/>
                    <button class="search" onClick={this.searchProducts}> Search </button></li>
                </ul>
            </div>  
          </div>
        </Router>
    );
    }
}
export default CNav;
