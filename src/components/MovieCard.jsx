// import React from 'react' 
import avatarImage from "../assets/avatar.png";
import marcoImage from "../assets/marco.png";
import miruthenImage from "../assets/miruthen.jpg";
import itImage from "../assets/it.jpg";
import nunImage from "../assets/nun.jpg";
import cbiImage from "../assets/cbi.jpg";
import chathurmukamImage from "../assets/chathurmukham.jpg";
import luckybaskharImage from "../assets/luckybaskhar.jpg";
import kanchanaImage from "../assets/kanchana.jpg";
import "./moviecard.css";



function MovieCard() {
  return (
    <div>
      <h2 className="cardtitle">New This Week</h2>
        <div className="header1">
              <img src={avatarImage} alt="avatar" />
               <img src={marcoImage} alt="marco"/>
               <img src={miruthenImage} alt="miruthen"/>
               <img src={itImage} alt="it"/>
               <img src={nunImage} alt="nun" />
               <img src={cbiImage} alt="cbi" />
              <img src={chathurmukamImage} alt="chathurmukam" />
              <img src={luckybaskharImage} alt="luckybaskhar" />
              <img src={kanchanaImage} alt="kanchana" />

            </div>
            <div>
              <h2 className="cardtitle2">Trending Now</h2>
              
            </div>
    </div>
  )
}

export default MovieCard