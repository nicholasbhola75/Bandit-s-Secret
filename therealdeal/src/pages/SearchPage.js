import React from 'react'
import { useParams } from 'react-router-dom'
import {useMangaSearch} from '../components/MangaInfo'
import MangaCard from '../components/MangaCard';
const SearchPage = () => {
    const q = useParams();
    console.log(q);
    const mangaresults = useMangaSearch(q);
    const results = mangaresults?.manga;
    return(
    <>
    <div className="section">
    <h6 className="sectiontitle">Most Popular</h6>
    <div className="container">
        <div className = "anime-row">
          <div className = "row">
            <MangaCard mangalist={results} />
          </div>
        </div>
    </div>
   </div>
    </>
    )
}




export default SearchPage