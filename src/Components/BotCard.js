import React from "react";

function BotCard() {
  return (
    <div className="Botcard">
       <div className = "Closecontainer">
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Bot Image "
      />
      <i className = "closeIcon" class="fa-solid fa-xmark"></i>
      </div>

      <h3 className="Botname">Botname</h3>
      <p className="Catchphrase">34566843345676540000</p>
      
    
      <hr/>

      <div className = "icons-section">

          <div className="health-checkin">
            <i class="fa-solid fa-heart-pulse"></i>
            <p className="health">23</p>
          </div>

          <div className="damage-checkin">
            <i class="fa-solid fa-bolt"></i>
            <p className="damage">42</p>
          </div>

          <div className="armor-checkin">
            <i class="fa-solid fa-shield-halved"></i>
            <p className="armor">98</p>
          </div>

        </div>

      </div>
  
  );
}

export default BotCard;
