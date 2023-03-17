import { useSelector } from 'react-redux';
import { useState, memo } from 'react';
import {  newsArray} from "../news/NewsSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import LatestPostItem from './LatestPostItem';
import './latestPost.scss';

const LatestPost = memo(() => {
    const {loadingStatus} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);
    const startRangeArray = 8;
    const newsPerCount = 8;
    const [endRangeArray, setEndRangeArray] = useState(startRangeArray + newsPerCount);

    if(loadingStatus === 'loading') {
        return <Spinner />
    }

    const handleMore = () => {
        setEndRangeArray(prevValue => prevValue + newsPerCount)
    }

    const elements = news.length > startRangeArray ? news.slice(startRangeArray, endRangeArray).map((item, i) => {
            return (
                <LatestPostItem key={nanoid()} {...item} category={category}/>
            )
        }) : <h2>Статей нет</h2>
    const listStyleNoArticles = news.length === 0 ? {gridTemplateRows: 'auto'} : {};
    const buttonStyleNoArticles = news.length === 0 ? {display: 'none'} : {};
    return (
        <div className="app-latest">
            <h1 className="app-latest__title">Последние статьи</h1>
            <ul style={listStyleNoArticles} className="app-latest__list">
                {elements}
            </ul>
            <button style={buttonStyleNoArticles} onClick={handleMore} className="btn btn-more app-latest__more">Еще</button>
        </div>
    )
})

export default LatestPost;