import React from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

const Menu = () =>{

 return(
  <div>
   <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
   <Link to="" class="navbar-brand">Info</Link>
        
   <div>
    
       <span class="nav-item active" id="menuspace"> <Link to="" className="rang">  Home </Link> </span>
       <span class="nav-item active" id="menuspace"> <Link to="Academics" className="rang"> Academics </Link> </span>
       <span class="nav-item active" id="menuspace"> <Link to="Projects" className="rang"> Projects </Link> </span>
       
  
    </div>
   
   </nav>
  </div>
 )

} 

export default Menu;