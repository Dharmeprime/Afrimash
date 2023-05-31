import React from "react";
import {Link} from 'react-router-dom';


function Navbar(){
return(
  
<div>
  <nav className="navbar navbar-expand-lg bg-light fixed-top mb-5" id="product" >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{color:'#000'}}> Prime<span style={{color: '#f2b636'}}>Portfolios</span>  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:'none', border:'none'}} >
            <span className="navbar-toggler-icon my-auto " style={{width:'1rem', height:'1rem', backgroundColor:'#fff'}}></span>
          </button>
          <div className="offcanvas offcanvas-start" id="offcanvas">
            <div className="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
            <div className="offcanvas-body justify-content-end" align="right">
              <ul className="navbar-nav pt-3 glonav" style={{color:'white'}}>
                <li className="navbar-item">
                  <Link to="/" className="nav-link ">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Contact</Link>
                </li>                  
              </ul>
             
            </div>


          </div>
        </div>
      </nav>
</div>)
}

export default Navbar;