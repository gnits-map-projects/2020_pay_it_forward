import React from "react";
import CNav from './Nav';
import swal from 'sweetalert';




const admin = {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%', 
}

const table = {
    top:'0%',
    left:'40%'
}
      
class CartProfile extends React.Component {

    constructor(props) {
        super(props);
         this.state={
           s:[],
           p:null,
           sf:false
         } 
       }
    x
    renderResultRows(){
      
        let s=this.state.s
        let n
        return s.map((song,index) => {
           let i='/productimages/'+song[1]
           //console.log(i,typeof(i))
           let a="nprice-"+index
            return (
                <tr id={index} className="foralign">
                    
                    <td >{song[0]}</td>
                    
                    <td><img src={i} class="validateimage"/></td>
                    <td  width="100px">{song[4]}</td>
                    <td >{song[2]}</td>
                    <td>{song[5]}</td>
                    <td>{song[6]}</td>
                    <td>{this.renderButton(index)}</td>
                    <td><button onClick={() => this.deleteDetails(index)} > Delete </button></td>
                     </tr>
            );
        });  
        

    }

    renderButton(index){
        let s=this.state.s;
        if(s[index][2]>=s[index][5])
        return (
            <button onClick={() => this.fetchDetails(index)} > BUY </button>

        );
        

    }

    deleteDetails(row){
        let s=this.state.s
        var body={"pid":s[row][3],"cid":sessionStorage.getItem("id")}
        const url = "http://localhost:9000/delcart";

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
                text: "Product details deleted Successfully!!!!",
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
        var body={"pid":s[row][3],"cid":sessionStorage.getItem("id"),"quant":s[row][2],"nquant":s[row][5],"aprice":s[row][4]}
        console.log()
        const url = "http://localhost:9000/buyproduct";

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
               // alert("Details submitted.. Thank You For purchasing..");
               swal({
                title: "Purchase Successful",
                text: "Thank you for purchasing!!!",
                icon: "success",
                button: "Ok",
              }).then(function(){
                window.location.reload(false);
              });
            }
          })
        
    }
    
   products(){
      let body={cid:sessionStorage.getItem("id")}
      console.log(body)
        const url = "http://localhost:9000/cartprofile";

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
            .then(response=>{                
                return response.json()
            }).then(res=>{this.setState({s:res})
            console.log(this.state.s) 
        })
            
            
                    
        }
        componentDidMount(){this.products()}
    
        render() {
            
           
            return (
            
                <div style={admin} class="adminmain">
                    <CNav/>
                    <div class="cat">
                     <h2><b><center>MY CART</center></b></h2><br/>
                       <table id="etable" class="w3-table-all w3-centered" border="1">
                        <th><center>Name</center></th>
                        <th><center>Image</center></th>
                        <th><center>Agreed Price</center></th>
                        <th><center>Availability</center></th>
                        <th><center>Required quantity</center></th>
                        <th><center>Description</center></th>
                        <th><center>Buy</center></th>
                        <th><center>Delete</center></th>
                        
                       <tbody> {this.renderResultRows()} </tbody>
                      </table>
                    </div>
                    
                    
                </div>
            )
        }
}

export default CartProfile