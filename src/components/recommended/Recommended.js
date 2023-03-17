import { useSelector } from 'react-redux';
import { useState, memo} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import RecommendedItem from './RecommendedItem';
import { newsArray } from '../news/NewsSlice';
import Pagination from './Pagination';

import './recommended.scss';

const Recommended = memo(() => {
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);

    const totalSlides = news.length;
    const [slide, setSlide] = useState(1);
    const [limit] = useState(12);
    const [siblings] = useState(1);

    const slideWidth = 750;
    const gapWidth = 15;
    const carouselWidth = news.length * (slideWidth + gapWidth);
    const translateWidth = slideWidth + gapWidth;
    const [offset, setOffset] = useState(0);

    const elements = news.length > 0 ? news.map((item, i) => {
                return (
                    <RecommendedItem key={nanoid()} {...item} category={category} />
                )
            }) : <h2>Статей нет</h2>
    const listStyleNoArticles = news.length === 0 && {width: '200px'}
    return (
        <div className="app-recommended">
            <div className="app-recommended__header">
                <h2 className="app-recommended__title">Рекомендованные вам</h2>
                <Pagination 
                    totalPage={totalSlides} 
                    page={slide} 
                    limit={limit} 
                    siblings={siblings} 
                    setSlide={setSlide} 
                    setOffset={setOffset} 
                    translateWidth={translateWidth} 
                    totalSlides={totalSlides} 
                    carouselWidth={carouselWidth}
                />
            </div>
            <div className="app-recommended__carousel">
                <div className="app-recommended__carousel-wrapper">
                    <ul 
                        style = {{width: `${carouselWidth}px`, transform: `translateX(${-offset}px)`, ...listStyleNoArticles}} 
                        className="app-recommended__list">
                        {elements}
                    </ul>
                </div>
            </div>
            
        </div>
    )
})

export default Recommended;