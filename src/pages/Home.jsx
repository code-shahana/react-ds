import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house-line.svg";
import filmIcon from "../assets/film-slate.svg";
import tvIcon from "../assets/television-simple.svg";
import trendIcon from "../assets/trend-up.svg";
import plusIcon from "../assets/plus.svg";
import shuffleIcon from "../assets/shuffle.svg";
import leoImage from "../assets/leo-title.png";
import MovieCard from "../components/MovieCard";
import "./home.css";

function Home() {
  return (
    <div className="netflix">
      <div className="sidebar">
        <img src={searchIcon} alt="Search icon" />
        <img src={homeIcon} alt="home icon" />
        <img src={filmIcon} alt="film icon" />
        <img src={tvIcon} alt="tv icon" />
        <img src={trendIcon} alt="trend icon" />
        <img src={plusIcon} alt="plus icon" />
        <img src={shuffleIcon} alt="suggle icon" />
      </div>
      <div className="main">
        <div className="hero">
          <img src={leoImage} alt="leo" />
          <p>IMDB : 0.10/10</p>
          <p>2B+ streams</p>
          <div className="h-button">
            <button className="b1">Play</button>
            <button className="b2">watch trailer</button>
            
          </div>

        </div>
        <MovieCard mtitle="New this Week"/>
        
      </div>
      
    </div>

  )
}

export default Home;
