import React from "react";
import CNav from './Nav';
import './Nav.css';
import './c_home.css'
import Sidenav from "./sidenav"
import productalone from './productalone.js'
var s;
const donor ={
   
    width: '100%',
    height: '100%', 
}

class Search extends React.Component{
    constructor(props){
        super(props);
       
       
        this.state={
            cp:[],
            
          }
    }
    componentDidMount()
    {
        const url = "http://localhost:9000/csearch";
       var body={search:sessionStorage.getItem("search")}
       console.log(body)
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
               console.log(res)
        })
          
    }
    renderproducts()
    {
        let s=this.state.cp
        let n
        return s.map((song,index) => {
           let i='/productimages/'+song[4]
           //console.log(i,typeof(i))
           let a="nprice-"+index
            return (
                <tr id={index} className="foralign">
                    
                    <td >{song[1]}</td>
                    <td ><div class="cost">Rs {song[6]}/-</div><div class="nominal">Rs {song[2]}/-</div></td>
                    <td >{song[3]}</td>
                    <td><img src={i} class="customerimage"/></td>
                    <td>{song[5]}<br/>Year of Purchase : {song[7]} </td>
                    <td><button onClick={() => this.buy(index)} >BUY</button></td>
                    
                     </tr>
            );
        });  
    }

    buy(index){
  
       let id=this.state.cp[index][0];
        console.log(id)
        window.location.href='/productalone/'+id

    }
    render(){
        return(
            <div style={donor} class="main">
                <CNav/>
                <Sidenav/>
                <div class="cat">
                    <h2><b>{s}</b></h2>
                    <table border="1"class="w3-table-all" id="ctable">
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Purchase</th>
                        {this.renderproducts()}
                    </table>
                </div>
                
            </div>
        )
    }
}
export default Search