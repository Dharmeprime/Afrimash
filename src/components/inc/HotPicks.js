import React from "react";
import {Link} from 'react-router-dom'

function HotPicks(){
return(
  <div className="container">
    <div className="row">
      <h3 className="text-center">HOT PICKS</h3>
      <div className="col-md-12">
        <ul class="nav nav-tabs m-auto justify-content-center" align='center'>
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/">TOP DEALS</Link>
            <div className="row">
              <div className="col-md-12">

                
              </div>
              {/* End of top deal column */}

            </div>
            {/* End of top deal row */}
          </li>
          {/* End Top deals tab */}


          <li class="nav-item">
            <Link class="nav-link" to="/">BEST SELLING</Link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>

  )
}

export default HotPicks;