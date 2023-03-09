import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, memo } from 'react';
import {  fetchLatestNews, latestNewsArray, latestCategoryChanged } from "./LatestSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import LatestPostItem from './LatestPostItem';
import './latestPost.scss';

const LatestPost = memo(() => {
    const {latestLoadingStatus} = useSelector(state => state.latestNews);
    const {latestCountry} = useSelector(state => state.latestNews);
    const {latestCategory} = useSelector(state => state.latestNews);
    const news = useSelector(latestNewsArray);
    const [pageSize, setPageSize] = useState(2);
    const [loadingMore, setLoadingMore] = useState(false);
    const [allCategoriesNews, setAllCategoriesNews] = useState([]);
    const [activeNews, setActiveNews] = useState(0);
    const dispatch = useDispatch();

    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'technology', 1, 1, 1, 1 ,1 ,1];
    

    // useEffect(() => {
    //     for(let i = 0; i < categories.length; i++) {
    //         dispatch(fetchLatestNews({country: latestCountry, category: categories[i], pageSize})).then((res) => setAllCategoriesNews(state => [...state, ...res.payload.articles]))
    //     }
    // }, [])

    console.log(allCategoriesNews);

    return (
        <div className="app-latest">
            <h1 className="app-latest__title">Последние статьи</h1>
            <ul className="app-latest__list">
                {categories.map((category, i) => {
                    return (
                        <LatestPostItem key={nanoid()} category={category} />
                    )
                })}
            </ul>
            <button className="btn btn-more app-latest__more">Еще</button>
        </div>
    )
})

export default LatestPost;