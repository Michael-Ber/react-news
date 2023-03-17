import { memo } from 'react';
import { useSelector } from 'react-redux';
import { newsArray } from "../news/NewsSlice";
import Spinner from '../spinner/Spinner';
import PopularItem from './PopularItem';
import { nanoid } from '@reduxjs/toolkit';
import './popular.scss';

const Popular = memo((props) => {
    const {loadingStatus} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);


    

    const renderItems = (arr) => {
        return arr.slice(2, 7).map((item, i) => {
            return (
                <PopularItem key={nanoid()} category={category} {...item} elementNumber = {i}/>
            )
        })
    }

    if(loadingStatus === 'loading') {
        return <Spinner />
    }else if(news.length === 0) {
        return <h2>Статей нет</h2>
    }

    const elements =  renderItems(news);
    return (
        <div className="app-main__popular popular-app-main">
            <h1 className="popular-app-main__title">Популярные новости за неделю</h1>
            <ul className="popular-app-main__list">
                {elements}
            </ul>
        </div>
    )
})

export default Popular;