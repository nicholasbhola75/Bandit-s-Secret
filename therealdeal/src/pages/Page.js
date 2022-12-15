import React from 'react'
import { useParams } from 'react-router-dom'
import {useMangaInfo} from '../components/MangaInfo'
import './Page.css'

const Page = () => {
 
 const {id} = useParams();
 const mangainfo = useMangaInfo(id);

 return(
    
    <div className='page'>
        <div>
            <div className='manga-title'>
                <h1>
                    <div>Japanese Title: <strong>{mangainfo.manga?.title}</strong></div>
                    <div>English Title: <strong>{mangainfo.manga?.title_english}</strong></div>
                    
                </h1>
            </div>
            <div className='container-info'>
                <table className='display'>
                    <tbody>
                        <tr>
                            <td className='leftborder'>
                                <div className='leftside'>
                                    <div className='image'>
                                        <img src={mangainfo.manga.images?.jpg.image_url} alt="" className='cover'/>
                                        <h2 className='categoryleft'>Information</h2>
                                        <p>Popularity: #{mangainfo.manga?.popularity}</p>
                                        <p>Rank: #{mangainfo.manga?.rank}</p>
                                        <p>Score: #{mangainfo.manga?.score}</p>
                                    </div>
                                </div>
                            </td>
                            <td className='rightborder'>
                                <div className='rightside'>
                                    <table className='information'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <h2 className='category'>Synopsis</h2>
                                                        <p className='paragraph'>{mangainfo.manga?.synopsis}</p>
                                                        <h2 className='category'>Background</h2>
                                                        <p className='paragraph'>{mangainfo.manga?.background}</p>
                                                        
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
    
    //console.log(mangainfo.manga.title)
 )
 

}

export default Page