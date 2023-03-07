import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {  fetchLatestNews, latestNewsArray, latestCategoryChanged } from "./LatestSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import LatestPostItem from './LatestPostItem';
import './latestPost.scss';

const LatestPost = () => {
    const {latestLoadingStatus} = useSelector(state => state.latestNews);
    // const {latestCountry} = useSelector(state => state.latestNews);
    // const {latestCategory} = useSelector(state => state.latestNews);
    // const news = useSelector(latestNewsArray);
    // const [pageSize, setPageSize] = useState(8);
    // const [loadingMore, setLoadingMore] = useState(false);
    // const [allCategoriesNews, setAllCategoriesNews] = useState([]);
    // const [activeNews, setActiveNews] = useState(0);
    // const dispatch = useDispatch();

    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    

    

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
        </div>
    )
}

export default LatestPost;