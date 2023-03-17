import { useEffect, useState, memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newsArray } from "../news/NewsSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import NewsItem from './NewsItem';
import NewsContent from './NewsContent';
import './currentNews.scss';

const CurrentNews = memo((props) => {
    const {loadingStatus} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);
    const [firstNews] = news;
    const [currentNews, setCurrentNews] = useState(firstNews);
    const [activeNews, setActiveNews] = useState(0);
    // const dispatch = useDispatch();
    
    const handleNews = useCallback((i) => {
        setCurrentNews(news[i]);
        setActiveNews(i);
    }, [setCurrentNews, setActiveNews, news])

    useEffect(() => {
        setCurrentNews(firstNews)
    }, [firstNews])


    if(loadingStatus === 'loading') {
        return <Spinner />
    }else if(news.length === 0) {
        return <h2>Статей нет</h2>
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
})

export default CurrentNews;