import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from 'react-router-dom';
import Pit from './components/login/login_register'
import Home from './components/Home'
import Donor from './components/donor/d_home'
import Addngo from './components/admin/addngo'
import Addproduct from './components/admin/addproduct'
import DonorProfile from './components/donor/myprofile'
import Feedback from './components/admin/feedback'
import Validate from './components/admin/validate'
import Dlogout from './components/donor/logout'
import Chome from './components/customer/c_home'
import Scatlist from "./components/customer/scatlist";
import productalone from "./components/customer/productalone";
import Cart from "./components/customer/myprofile"
import CartProfile from "./components/customer/mycart"
import Search from "./components/customer/search"
import Dproducts from "./components/donor/dproducts"
import Cproducts from "./components/customer/myproducts"
import DonorDemo from "./components/donor/donorhome"
import Dproduct from "./components/donor/donorproduct"
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        
        <Route path="/login" component={Pit}/>
        <Route path="/home" component={Home}/>
        <Route path="/donorhome" component={DonorDemo}/>
        <Route path="/addngo" component={Addngo}/>
        <Route path="/feedback" component={Feedback}/>
        <Route path="/validate" component={Validate}/>
        <Route path="/addproduct" component={Addproduct}/>
        <Route path="/donorprofile" component={DonorProfile}/>
        <Route path="/scatlist/:scat" component={Scatlist}/>
        <Route path="/chome" component={Chome}/>
        <Route path="/cart" component={CartProfile}/>
        <Route path="/profile" component={Cart}/>
        <Route path="/dlogout" component={Dlogout}/>
        <Route path="/dproducts" component={Dproducts}/>
        <Route path="/csearch" component={Search}/>
        <Route path="/products" component={Cproducts}/>
        {/* <Route path="/demoform" component={UserForm}/> */}
        <Route path="/donorproduct" component={Dproduct}/>
        <Route path="/productalone/:id" component={productalone}/>
        {/* <Route path="/demo" component={DonorDemo}/> */}

        
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
