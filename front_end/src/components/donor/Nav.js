import React from 'react';
import './Nav.css';
import pit from '../img/pit.jpg';
import { BrowserRouter as Router} from "react-router-dom";



class DonorNav extends React.Component {
    
    render() {
    return (<Router>
        <div class="home">
            <div class="nav">
            <ul>
            <li><a class="active" href="/"><img alt="sorry" height="67px" width="190px" src={pit}/></a></li>
                <li><a class="links" href="/dlogout">LogOut</a></li>
                <li><a class="links" href="/donorprofile">MyProfile</a></li>
                <li><a class="links" href="/dproducts">Donated Products</a></li>
                <li><a class="links" href="/donorhome">Donate</a></li>
            </ul>
            </div>
              
        </div>
        </Router>
    );
    }
}
export default DonorNav;
