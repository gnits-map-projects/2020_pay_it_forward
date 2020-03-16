import React from 'react';
import './Nav.css';
import pit from '../img/pit.jpg';



import { BrowserRouter as Router} from "react-router-dom";

class AdminNav extends React.Component {
    
    render() {
    return (<Router>
                <div class="home">
                    <div class="nav">
                        <ul>
                            <li><a class="active" href="/"><img alt="sorry" height="120%" width="15%" src={pit}/></a></li>
                            <li><a class="links" href="/login">Log Out</a></li>
                            <li><a class="links" href="/feedback">Feedback</a></li>
                            <li><a class="links" href="/addngo">NGO & Customer</a></li>
                            <li><a class="links" href="/validate">Validate Products</a></li>
                        </ul>
                    </div>   
                </div>
            </Router>
        );
    }
}
export default AdminNav;
