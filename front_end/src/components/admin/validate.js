import React from "react";
import AdminNav from './Nav';
import './addngo.css';
import './validate.css';
import Popupform from './popupform';
import swal from 'sweetalert';


const admin11 = {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%', 
}

const table = {
    top:'20%',
    left:'40%'
}
      
class Validate extends React.Component {

    constructor(props) {
        super(props);
         this.state={
           s:[],
           p:null,
           sf:false
         }
    
         
       }
    
   
     
    renderResultRows(){
      
        let s=this.state.s
        let n
        return s.map((song,index) => {
           let i='/productimages/'+song[4]
           //console.log(i,typeof(i))
           let a="nprice-"+index
            return (
                <tr id={index} className="foralign">
                    
                    <td ><center>{song[1]}</center></td>
                    <td ><center>{song[3]}</center></td>
                    <td><img src={i} class="validateimage"/></td>
                    <td ><center>Rs {song[6]}/-</center></td>
                    <td ><center>{song[7]}</center></td>
                    <td contentEditable="true" id={a} width="100px"></td>
                    <td><button onClick={() => this.fetchDetails(index)} > Validate </button></td>
                    <td><button onClick={() => this.deleteDetails(index)} > Delete </button></td>
                </tr>
            );
        });  
        

    }

    deleteDetails(row){
        let s=this.state.s
        var body={"pid":s[row][0]}
        const url = "http://localhost:9000/deleteproduct";

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
            .then(response => {if(response.ok){
               // alert("Details deleted");
               swal({
                title: "Deletion",
                text: "Product details deleted Successfully!!!",
                icon: "success",
                button: "Ok",
              }).then(function(){
                window.location.reload(false);
              });
              
            }
          })

    }

    fetchDetails(row){
        let s=this.state.s
        let a="nprice-"+row
        let n=document.getElementById(a).innerHTML;
        //  console.log(row,n)
        var body={"pid":s[row][0],"np":n}
        console.log()
        const url = "http://localhost:9000/updateproduct";

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
            .then(response => {if(response.ok){
                //alert("Details submitted.. Product is certified for purchasing..");
                swal({
                    title: "Validation",
                    text: "Product details submitted Successfully!!!",
                    icon: "success",
                    button: "Ok",
                  }).then(function(){
                    window.location.reload(false);
                  });
            }
          })
        
    }
    
   products(){
        const url = "http://localhost:9000/products";

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
            .then(response=>{                
                return response.json()
            }).then(res=>{this.setState({s:res})
           console.log(this.state.s) 
        })
            
            
                    
        }
        componentDidMount(){this.products()}
    
        render() {
            let i='/productimages/bajaj1.jpeg'
           
            return (
            
                <div style={admin11} class="adminmain11">
                    <AdminNav/>
                    <div class="cat">
                     <h2><b><center>VALIDATE PRODUCTS</center></b></h2><br/>
                      <table  class="w3-table-all" border="1" id="etable">
                        
                        <th><center>Name</center></th>
                        <th><center>Category</center></th>
                        <th><center>Image</center></th>
                        <th><center>Original Cost</center></th>
                        <th><center>Year of Purchase</center></th>
                        <th><center>Nominal Price(In Rs)</center></th>
                        <th><center>Validation</center></th>
                        <th><center>Remove</center></th>
                        
                       <tbody> {this.renderResultRows()} </tbody>
                      </table>
                    </div>
                    {/* <img src={window.location.origin + "/productimages/drafter.jpg"}/> */}
                </div>
            )
        }
}

export default Validate