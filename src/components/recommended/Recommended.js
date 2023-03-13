import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, memo, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import RecommendedItem from './RecommendedItem';
import { newsArray } from '../main/MainSlice';
// import {ReactComponent as Prev} from './arrow.svg';
import Arrow from '../arrow/Arrow';
import Pagination from './Pagination';

import './recommended.scss';

const Recommended = memo(() => {
    const {loadingStatus} = useSelector(state => state.news);
    const {country} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);

    
    // const categories = ['general', 'business', 'entertainment', 'health', 'science', 'technology', 1, 1, 1, 1 ,1 ,1];

    const totalSlides = news.length;
    const [slide, setSlide] = useState(1);
    const [limit] = useState(12);
    const [siblings] = useState(1);

    const slideWidth = 750;
    const gapWidth = 15;
    const carouselWidth = news.length * (slideWidth + gapWidth);
    const translateWidth = slideWidth + gapWidth;
    const [offset, setOffset] = useState(0);

    
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
                        style = {{width: `${carouselWidth}px`, transform: `translateX(${-offset}px)`}} 
                        className="app-recommended__list">
                        {news.map((item, i) => {
                            return (
                                <RecommendedItem key={nanoid()} {...item} category={category} />
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
})

export default Recommended;