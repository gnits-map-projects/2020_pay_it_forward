import React from "react";
import CNav from './Nav';




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
      
class Cproducts extends React.Component {

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
                    
                    <td>{song[0]}</td>
                    <td><img src={i} class="validateimage"/></td>
                    <td >{song[2]}</td>
                    
                    <td  width="100px">{song[3]}</td>
                     </tr>
            );
        });  
        

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
                alert("Details submitted.. Thank You For purchasing..");
              window.location.reload(false);
            }
          })
        
    }
    
   products(){
      let body={cid:sessionStorage.getItem("id")}
      console.log(body)
        const url = "http://localhost:9000/cprofile";

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
                   
                    <table id="table" class="w3-table-all w3-centered" border="1">
                        <th><center>Name</center></th>
                        <th><center>Image</center></th>
                        <th><center>Purchased Price</center></th>
                        <th><center>Quantity purchased</center></th>
                        
                        
                     <tbody> {this.renderResultRows()} </tbody>
                    </table>
                    
                    
                </div>
            )
        }
}

export default Cproducts