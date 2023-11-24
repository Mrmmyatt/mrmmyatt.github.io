import React from "react";
import trophieList from "../trophieList";
import Card from "./Card";

function createTier(trophieList) {
  return <Card
    key={trophieList.id}
    medal={trophieList.trophy}
    name={trophieList.name}
    benefits={trophieList.benefits}
    aButton={trophieList.aButton}
  />;
}


function Note() {
  return (
  <div className="note">
    <img src="https://img.freepik.com/premium-vector/car-wash-station-carwash-service-icon-cleaning-engine-car-body-transport-is-clean-all-sides-comprehensive-washing-cleaning-car-car-wash-washing-with-foam-water_435184-1034.jpg?w=1060" 
        class="wash-logo"/>
    <h1 class="UCbanner">
      <span>You'll have the cleanest car in all of Utah County!</span>
    </h1>

    <div class="gridding">
      <div>
        <p class="startingPlan">Plans starting at $20.99/mo!</p>
        <button class="washOptions">See Plans</button>
      </div>
      <div>
        <img src="https://www.shell.ca/en_ca/motorists/shell-canada-car-wash/_jcr_content/pagePromo/image.img.960.jpeg/1672856117443/carwash-dec-2022.jpeg" class="dirtyCar"/>
      </div>
    </div>
   
    <h1 class="tierHeader">Trophie Tier Service</h1>
    
    {trophieList.map(createTier)}
  
    <img src="https://www.cdge.com.sg/wp-content/uploads/2022/06/Training-Personal-Homepage_Related-Services-3_580x900.jpg" class="splashCar"/>
   
  </div>
  );
}

export default Note;