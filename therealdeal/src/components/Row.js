import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MangaCard from './MangaCard';
function Row( {genre} ) {
    const [row, setManga] = useState([]);
    useEffect (() => {
      const fetchData = async () => {
    try{
      const req = await axios.request(`https://api.jikan.moe/v4/manga?limit=20&genres=${genre}`);
      return req;
    }
      catch(error){}
    }
    fetchData().then(req => {
    setManga(req.data.data);
    console.log(req.data.data);
    });
  }, []);
  console.log(row);

  return (
    <MangaCard mangalist={row} />
  )
}

export default Row