import { memo } from 'react';
import withStoreData from '../HOC/withStoreData';
import PopularItem from './PopularItem';
import { nanoid } from '@reduxjs/toolkit';
import './popular.scss';

const Popular = memo(({news, category}) => {

    const renderItems = (arr) => {
        return arr.slice(2, 7).map((item, i) => {
            return (
                <PopularItem key={nanoid()} category={category} {...item}/>
            )
        })
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

export default withStoreData(Popular);