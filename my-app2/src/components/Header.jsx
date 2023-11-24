import React from "react";

function Header() {

  return (
    <div class="flexbox">
      <div>
        <img src="https://img.freepik.com/premium-vector/car-wash-station-carwash-service-icon-cleaning-engine-car-body-transport-is-clean-all-sides-comprehensive-washing-cleaning-car-car-wash-washing-with-foam-water_435184-1034.jpg?w=1060" 
          class="wash-icon"/>
      </div>
      <div>
        <h1 class="appName">SQUEAK -E- CLEAN</h1>
      </div>
      <div class="search-flex">
        <input type="type" placeholder="search" class="search"/>
        <button class="buttonBorder">
          <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-2/512/User_Interface-25-512.png" class="magnifyButton" />
        </button>
      </div>
      
    </div>
  );
}

export default Header;