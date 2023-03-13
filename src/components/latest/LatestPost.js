import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, memo } from 'react';
import {  newsArray} from "../main/MainSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import LatestPostItem from './LatestPostItem';
import './latestPost.scss';

const LatestPost = memo(() => {
    const {loadingStatus} = useSelector(state => state.news);
    const {country} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);
    const [pageSize, setPageSize] = useState(2);
    const [loadingMore, setLoadingMore] = useState(false);
    const startRangeArray = 8;
    const newsPerCount = 8;
    const [endRangeArray, setEndRangeArray] = useState(startRangeArray + newsPerCount);
    const dispatch = useDispatch();

    if(loadingStatus === 'loading') {
        return <Spinner />
    }

    const handleMore = () => {
        setEndRangeArray(prevValue => prevValue + newsPerCount)
    }
    
    return (
        <div className="app-latest">
            <h1 className="app-latest__title">Последние статьи</h1>
            <ul className="app-latest__list">
                {news.slice(startRangeArray, endRangeArray).map((item, i) => {
                    return (
                        <LatestPostItem key={nanoid()} {...item} category={category}/>
                    )
                })}
            </ul>
            <button onClick={handleMore} className="btn btn-more app-latest__more">Еще</button>
        </div>
    )
})

export default LatestPost;