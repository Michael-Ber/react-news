import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchNews, newsArray } from "../main/MainSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import NewsItem from './NewsItem';
import NewsContent from './NewsContent';
import './currentNews.scss';

const CurrentNews = () => {
    const {loadingStatus} = useSelector(state => state.news);
    const {country} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);
    const [firstNews] = news;
    const [currentNews, setCurrentNews] = useState(null);
    const [activeNews, setActiveNews] = useState(0);
    const dispatch = useDispatch();
    
    const handleNews = (i) => {
        setCurrentNews(news[i]);
        setActiveNews(i);
    }

    useEffect(() => {
        dispatch(fetchNews({country, category}))
            
    }, [])

    useEffect(() => {
        setCurrentNews(firstNews)
    }, [firstNews])

    console.log('render');
    
    if(loadingStatus === 'loading' || news.length === 0) {
        return <Spinner />
    }
    return (
        <div className="app-main__tabs tabs-app-main">
            <div className="tabs-app-main__contents">
                <NewsContent category={category} currentNews={currentNews}/>
            </div>
            <div className="tabs-app-main__items">
                {news.slice(0, 2).map((item, i) => {
                    return <NewsItem key={nanoid()} {...item} activeNews={activeNews} elementNumber = {i} handleNews={() => handleNews(i)}/>
                })}
            </div>
        </div>
    )
}

export default CurrentNews;