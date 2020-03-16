import React from "react";
import CNav from './Nav';
import './Nav.css';
import './c_home.css'
import Sidenav from "./sidenav"


// var eid,profile,image1,image2,message,ngo,s;

const donor ={
   
    width: '100%',
    height: '100%',
//     backgroundColor: '#dcdcdc',
    
}

class Chome extends React.Component {
        
        constructor(props){
                super(props);
                console.log("hello");     
        }

componentDidMount(){
        const url = "http://localhost:9000/customersearch";
        let body={cid:sessionStorage.getItem("id")}
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
                return response.text()
            }).then(res=>{alert(res)
           // console.log(this.state.s) 
        })
}
        

  render() {
     
    return (
      <div style={donor} class="main">
          <CNav/>
          <Sidenav/>
          <div class="cat">
          
              <div class="cat-block">
                  <h2>FURNITURES</h2>    
                  <div class="subcat">
                          
                          <a href="/scatlist/Sofas">
                          <img src={ "/catimages/sofa.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Sofas</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Beds">
                          <img src={  "/catimages/bed.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Beds</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/HomeDecors">
                          <img src={  "/catimages/homedec.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Home Decors</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat">
                          <a href="/scatlist/Wadrobes">
                          <img src={  "/catimages/wadrobes.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Wadrobes</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat">
                          <a href="/scatlist/ChairsDining">
                          <img src={  "/catimages/chair2.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">ChairsDining</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat">
                          <a href="/scatlist/ChairsDining">
                          <img src={  "/catimages/kf.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">KidsFurniture</div>
                          </div>
                          </a>
                  </div>  
                  <div class="subcat">
                          <a href="/scatlist/OtherFurniture">
                          <img src={  "/catimages/of.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Furniture</div>
                          </div>
                          </a>
                  </div>  
              
              </div>
              
              <div class="cat-block">
              <div id="clothing">
                  <h2>CLOTHING</h2>
                  <div class="subcat"><a href="/scatlist/Mens">
                          <img src={  "/catimages/men2.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Mens</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Womens">
                          <img src={  "/catimages/womens.png"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Womens</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Kids">
                          <img src={  "/catimages/kids.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Kids</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/SportsWear">
                          <img src={  "/catimages/sclothes.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">SportsWear</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/OtherClothing">
                          <img src={  "/catimages/oclothes.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Clothing</div>
                          </div>
                          </a>
                  </div>
              </div>
              </div>
              
              <div class="cat-block">
              <div id="electronics">
                  <h2>ELECTRONICS</h2>
                  <div class="subcat"><a href="/scatlist/CamerasAndLenses">
                          <img src={  "/catimages/camera.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Cameras And Lenses</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/TV-Video-Audio">
                          <img src={  "/catimages/tvs.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">TV-Video-Audio</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Computers">
                          <img src={  "/catimages/computers.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Computers</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat">
                          <a href="/scatlist/Mobiles">
                          <img src={  "/catimages/mobile.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Mobiles</div>
                          </div>
                          </a>
                  </div>  
                  <div class="subcat">
                          <a href="/scatlist/ComputerAccessories">
                          <img src={  "/catimages/ca.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Computer Accessories</div>
                          </div>
                          </a>
                  </div> 
                  <div class="subcat">
                          <a href="/scatlist/OtherComputerAppliances">
                          <img src={  "/catimages/oe.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Electronics</div>
                          </div>
                          </a>
                  </div> 
              </div> 
              </div>
             

                
              <div class="cat-block">
              <div id="appliances">
                  <h2>APPLIANCES</h2>
                  <div class="subcat"><a href="/scatlist/ACs">
                          <img src={  "/catimages/ac.png"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">ACs</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Refrigerators">
                          <img src={  "/catimages/fridge.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Refrigerators</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/WashingMachines">
                          <img src={  "/catimages/wm.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">WashingMachines</div>
                          </div>
                          </a>
                  </div>
                  
                  <div class="subcat">
                          <a href="/scatlist/KitchenAppliances">
                          <img src={  "/catimages/ka.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Kitchen Appliances</div>
                          </div>
                          </a>
                  </div>  
                  <div class="subcat"><a href="/scatlist/LightsAndFans">
                          <img src={  "/catimages/landf.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Lights & Fans</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/OtherAppliances">
                          <img src={  "/catimages/oa.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Appliances</div>
                          </div>
                          </a>
                  </div>
                  
              </div> 
              </div>
               
              <div class="cat-block">
              <div id="vehicles">
                  <h2>VEHICLES</h2>
                  <div class="subcat"><a href="/scatlist/Cars">
                          <img src={  "/catimages/car1.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Cars</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Bikes">
                          <img src={  "/catimages/bik.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Bikes</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Bicycles">
                          <img src={  "/catimages/cycle.png"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Bicycles</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Autos">
                          <img src={  "/catimages/auto.png"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Autos</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Trucks">
                          <img src={  "/catimages/ovehicles.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Trucks</div>
                          </div>
                          </a>
                  </div>
                  
                  <div class="subcat">
                          <a href="/scatlist/OtherVehicles">
                          <img src={  "/catimages/ov.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Vehicles</div>
                          </div>
                          </a>
                  </div>  
              </div> 
              </div>
              
              <div class="cat-block">
              <div id="stationery">
                  <h2>STATIONARY</h2>
                  <div class="subcat"><a href="/scatlist/WritingThings">
                          <img src={  "/catimages/pen2.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">WritingThings</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Books">
                          <img src={  "/catimages/book.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Books</div>
                          </div>
                          </a>
                  </div>

                  <div class="subcat">
                          <a href="/scatlist/EngineeringInstruments">
                          <img src={  "/catimages/eng.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">EngineeringInstruments</div>
                          </div>
                          </a>
                  </div> 

                  <div class="subcat">
                          <a href="/scatlist/EngineeringInstruments">
                          <img src={  "/catimages/otherac.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Tailoring</div>
                          </div>
                          </a>
                  </div> 
                  <div class="subcat"><a href="/scatlist/OtherStationary">
                          <img src={  "/catimages/ostat.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Stationary</div>
                          </div>
                          </a>
                  </div>
                  
                   
              </div> 
              </div>

              
              <div class="cat-block">
              <div id="accessories">
                  <h2>ACCESSORIES</h2>
                  <div class="subcat"><a href="/scatlist/Watches">
                          <img src={  "/catimages/watch1.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Watches</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Jewellery">
                          <img src={  "/catimages/jew3.jpeg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Jewellery</div>
                          </div>
                          </a>
                  </div>
                  <div class="subcat"><a href="/scatlist/Footwear">
                          <img src={  "/catimages/foot.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Footwear</div>
                          </div>
                          </a>
                  </div>

                  <div class="subcat">
                          <a href="/scatlist/BagsAndWallets">
                          <img src={  "/catimages/bandc3.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">BagsAndWallets</div>
                          </div>
                          </a>
                  </div> 
                  <div class="subcat"><a href="/scatlist/OtherAccessories">
                          <img src={  "/catimages/access1.jpg"} alt="Avatar" class="image"/>
                          <div class="overlay">
                                <div class="cattext">Other Accessories</div>
                          </div>
                          </a>
                  </div>
                  
                   
              </div> 
              </div>
              
              <br/><br/><br/>
        </div>
          
      </div>
    );
  }
}
export default Chome