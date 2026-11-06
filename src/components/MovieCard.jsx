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
import drishyamImage from "../assets/drishyam.jpg";
import lokahImage from "../assets/lokah.jpg";
import premaluImage from "../assets/premalu.webp";
import tomhollandImage from "../assets/tomholland.jpg";
import spidermanImage from "../assets/spiderman.jpeg";
import avengersImage from "../assets/avengers.jpg";
import "./moviecard.css";

function MovieCard() {
  return (
    <div>
      <h2 className="cardtitle">New This Week</h2>
      <div className="header1">
        <img src={avatarImage} alt="avatar" />
        <img src={marcoImage} alt="marco" />
        <img src={miruthenImage} alt="miruthen" />
        <img src={itImage} alt="it" />
        <img src={nunImage} alt="nun" />
        <img src={cbiImage} alt="cbi" />
        <img src={chathurmukamImage} alt="chathurmukam" />
        <img src={luckybaskharImage} alt="luckybaskhar" />
        <img src={kanchanaImage} alt="kanchana" />
        <img src={drishyamImage} alt="drishyam" />
        <img src={lokahImage} alt="lokah" />
        <img src={premaluImage} alt="premalu" />
      </div>

      
        <h2 className="cardtitle">Trending Now</h2>
        <div className="header1" >
        <img src={tomhollandImage} alt="tomholland" />
        <img src={spidermanImage} alt="spiderman" />
        <img src={avengersImage} alt="avengers" />
      </div>
      </div>
  );
}

export default MovieCard;
