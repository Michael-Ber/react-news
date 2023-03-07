import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchNews, newsArray } from "../main/MainSlice";
import Spinner from '../spinner/Spinner';
import PopularItem from './PopularItem';
import { nanoid } from '@reduxjs/toolkit';
import './popular.scss';

const Popular = () => {
    const {loadingStatus} = useSelector(state => state.news);
    const {country} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews({country, category}))
    }, [])

    if(loadingStatus === 'loading' || news.length === 0) {
        return <Spinner />
    }

    const renderItems = (arr) => {
        return arr.slice(2, 7).map((item, i) => {
            return (
                <PopularItem key={nanoid()} category={category} {...item} elementNumber = {i}/>
            )
        })
    }

    const elements = renderItems(news);
    return (
        <div className="app-main__popular popular-app-main">
            <h1 className="popular-app-main__title">Популярные новости за неделю</h1>
            <ul className="popular-app-main__list">
                {elements}
            </ul>
        </div>
    )
}

export default Popular;