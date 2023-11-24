import React from "react";
import Detail from "./Detail";

function Card(props) {
  return <div class="trophy-box">
    <div class="trophy-info">
      <div class="medal">
      <Detail 
        detailInfo={props.medal}
      /> 
      </div> 
      <div>
      <Detail 
        detailInfo={props.name}
      />
      </div>
      <div class="name">
        <Detail class="benefits"
        detailInfo={props.benefits}
      />
      </div>
      <div> 
        <button class="trophyButton">{props.aButton}</button>
      </div>
    </div>
  </div>
}

export default Card;