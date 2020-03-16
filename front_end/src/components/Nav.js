import React from 'react';
import './Nav.css';
import pit from './img/pit.jpg';


import { BrowserRouter as Router} from "react-router-dom";

class Nav extends React.Component {
    
    render() {
    return (<Router>
        <div class="home">
            <div class="nav">
            <ul>
                <li><a class="active" href="/"><img alt="sorry" height="80px" width="300px" src={pit}/></a></li>
                <li><a class="links" href="#about">AboutUs</a></li>
                <li><a class="links" href="#contact">ContactUs</a></li>
            </ul>
            </div>
              
        </div>
        </Router>
    );
    }
}
export default Nav;
