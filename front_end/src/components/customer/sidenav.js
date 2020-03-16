import React from "react"
import "./c_home.css"
class Sidenav extends React.Component{
    render(){
        return(
            <div class="ccontainer">
            <div className ="csidebar">
                  <h2>Products Categories</h2>
                  <ul class="main-nav-ul">
                      <li>Furnitures
                          <ul>
                                  <li><a href="/scatlist/Sofas">Sofas</a></li>
                                  <li><a href="/scatlist/Beds">Beds</a></li>
                                  <li><a href="/scatlist/Wadrobes">Wadrobes</a></li>
                                  <li><a href="/scatlist/HomeDecors">HomeDecors</a></li>
                                  <li><a href="/scatlist/ChairsDining">ChairsDining</a></li>
                                  <li><a href="/scatlist/KidsFurniture">KidsFurniture</a></li>
                          </ul>
                      </li>
                      <li>Electronics
                          <ul>
                                  <li><a href="/scatlist/CamerasAndLenses">CamerasAndLenses</a></li>
                                  <li><a href="/scatlist/Computers">Computers</a></li>
                                  <li><a href="/scatlist/Mobiles">Mobiles</a></li>
                                  <li><a href="/scatlist/TV-Audio-Audio">TV-Video-Audio</a></li>
                                  <li><a href="/scatlist/ComputersAccessories">ComputerAccessories</a></li>
                          </ul>
                      </li>
                      <li>Appliances
                          <ul>
                                  <li><a href="/scatlist/Refrigerators">Refrigerators</a></li>
                                  <li><a href="/scatlist/WashingMachines">WashingMachines</a></li>
                                  <li><a href="/scatlist/ACs">ACs</a></li>
                                  <li><a href="/scatlist/KitchenAppliances">KitchenAppliances</a></li>
                          </ul>
                      </li>
                      <li>Vehicles
                          <ul>
                                  <li><a href="/scatlist/Cars">Cars</a></li>
                                  <li><a href="/scatlist/Bikes">Bikes</a></li>
                                  <li><a href="/scatlist/Bicycles">Bicycles</a></li>
                                  <li><a href="/scatlist/OtherVehicles">OtherVehicles</a></li>
                          </ul>
                      </li>
                      <li>Clothing
                          <ul>
                                  <li><a href="/scatlist/Men">Men</a></li>
                                  <li><a href="/scatlist/Women">Women</a></li>
                                  <li><a href="/scatlist/Kids">Kids</a></li>
                                  <li><a href="/scatlist/OtherClothing">OtherClothing</a></li>
                          </ul>
                      </li>
                      <li>Accessories
                          <ul>
                                  <li><a href="/scatlist/Watches">Watches</a></li>
                                  <li><a href="/scatlist/Footwear">Footwear</a></li>
                                  <li><a href="/scatlist/BagsAndWallets">BagsAndWallets</a></li>
                                  <li><a href="/scatlist/Jewellery">Jewellery</a></li>
                                  <li><a href="/scatlist/OtherAccessories">OtherAccessories</a></li>
                          </ul>
                      </li>
                      <li>Stationery
                          <ul>
                                  <li><a href="/scatlist/WritingThings">WritingThings</a></li>
                                  <li><a href="/scatlist/Books">Books</a></li>
                                  <li><a href="/scatlist/EngineeringInstruments">EngineeringInstruments</a></li>
                                  <li><a href="/scatlist/OtherStationery">OtherStationery</a></li>
                          </ul>
                      </li>
                   
                  
                  </ul>
          </div>
    </div>
        )
    }
}
export default Sidenav;