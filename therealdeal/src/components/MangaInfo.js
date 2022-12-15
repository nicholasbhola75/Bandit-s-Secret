import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

export const useMangaInfo = (id) => {
    const [manga, GetMangaInfo] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const info = async () => {
            const response = await axios.get(`https://api.jikan.moe/v4/manga/${id}`);
            //console.log(response.data.data);
            GetMangaInfo(response.data.data);
        };
        const test = async () => {
            setIsLoading(true);
            try {
                await info();
            }
            catch (error){
                console.log(error);
            }
            setIsLoading(false);
        };
        test();
    }, []);
    console.log(manga)
    return {manga};
};

export const useMangaSearch = (query) => {
    const [manga, GetMangaInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const info = async () => {
            const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${query}&limit=20&order_by=popularity&type=manga`);
            //console.log(response.data.data);
            GetMangaInfo(response.data.data);
        };
        const test = async () => {
            setIsLoading(true);
            try {
                await info();
            }
            catch (error){
                console.log(error);
            }
            setIsLoading(false);
        };
        test();
    }, []);
    console.log(manga)
    return {manga};
};

export default useMangaInfo
