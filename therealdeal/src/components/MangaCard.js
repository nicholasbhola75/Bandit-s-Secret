import React from 'react'
import './MangaCard.css'
function MangaCard({mangalist}) {
  return (
    <>
      {
        mangalist.map((manga) => {
          return (
            <a key={manga?.mal_id} href={`/manga/${manga?.mal_id}`} className="card" rel="nonreferrer">
              <img src = {manga.images?.jpg.image_url} alt=""/>
              <div className="anime-info">
                <h3>{manga.title}</h3>
              </div>
            </a>
          );
        }) 
      }
    
    </>
  )
}

export default MangaCard
/*
<article className="manga-card">
        <a href= {manga.url}
        target="_blank" 
        rel="noreferrer">
            <figure>
                <img src = {manga.images.jpg.image_url}
                alt = "Image" />
            </figure>
            <h3>{manga.title}</h3>
            <h3>{manga.synopsis}</h3>
        </a>
    </article>
*/