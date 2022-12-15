import React from 'react'
import {useState, useEffect} from 'react'
import MangaCard from '../components/MangaCard';
import axios from 'axios';
import Row from '../components/Row';
import './Home.css'

function Home() {
  
  const [topManga, SetTopManga] = useState([]);

  useEffect (() => {
    async function GetTopManga() {
      const request = await axios.get("https://api.jikan.moe/v4/top/manga?type=manga&filter=bypopularity&limit=20");
      SetTopManga(request.data.data);
      console.log(request.data.data);
      return request;
    }
    const test = async () => {
      try {
        await GetTopManga();
      }
      catch (error){
        console.log(error);
      }

    };
    test();
  }, []);

  return (
    <>
   <div className="section">
    <h6 className="sectiontitle">Most Popular</h6>
    <div className="container">
        <div className = "anime-row">
          <div className = "row">
            <MangaCard mangalist={topManga} />
          </div>
        </div>
    </div>
   </div>
   <div className="section">
    <h6 className="sectiontitle">Action</h6>
    <div className="container">
        <div className = "anime-row">
          <div className = "row">
            <Row title="Action" genre="1" />
          </div>
        </div>
    </div>
   </div>
   <div className="section">
    <h6 className="sectiontitle">Comedy</h6>
    <div className="container">
        <div className = "anime-row">
          <div className = "row">
            <Row title="Action" genre="4" />
          </div>
        </div>
    </div>
   </div>
   <div className="section">
    <h6 className="sectiontitle">Drama</h6>
    <div className="container">
        <div className = "anime-row">
          <div className = "row">
            <Row title="Action" genre="8" />
          </div>
        </div>
    </div>
   </div>
    </>
  );
  
}

export default Home;