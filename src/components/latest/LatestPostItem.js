import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {  fetchLatestNews, latestNewsArray, latestCategoryChanged } from "./LatestSlice";
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import './latestPostItem.scss';

const LatestPostItem = ({category}) => {
    const {latestLoadingStatus} = useSelector(state => state.latestNews);
    const {latestCountry} = useSelector(state => state.latestNews);
    const {latestCategory} = useSelector(state => state.latestNews);
    const news = useSelector(latestNewsArray);
    const [pageSize, setPageSize] = useState(2);
    const [loadingMore, setLoadingMore] = useState(false);
    const [allCategoriesNews, setAllCategoriesNews] = useState([]);
    const [activeNews, setActiveNews] = useState(0);
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(fetchLatestNews(latestCountry, category, pageSize))
    // }, [category])

    if(latestLoadingStatus === 'loading' || news.length === 0) {
        return <Spinner />
    }

    console.log(news);
    return (
        <li className="app-latest__item">
            <Link to={`/${latestCategory}/`}>

            </Link>
        </li>
    )
}

export default LatestPostItem;