import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import RecommendedItem from './RecommendedItem';
// import {ReactComponent as Prev} from './arrow.svg';
import Arrow from '../arrow/Arrow';
import './recommended.scss';

const Recommended = memo(() => {
    // const {latestLoadingStatus} = useSelector(state => state.latestNews);
    // const {latestCountry} = useSelector(state => state.latestNews);
    // const {latestCategory} = useSelector(state => state.latestNews);
    // const news = useSelector(latestNewsArray);
    // const [pageSize, setPageSize] = useState(2);
    // const [loadingMore, setLoadingMore] = useState(false);
    // const [allCategoriesNews, setAllCategoriesNews] = useState([]);
    // const [activeNews, setActiveNews] = useState(0);
    // const dispatch = useDispatch();

    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'technology', 1, 1, 1, 1 ,1 ,1];
    

    // useEffect(() => {
    //     for(let i = 0; i < categories.length; i++) {
    //         dispatch(fetchLatestNews({country: latestCountry, category: categories[i], pageSize})).then((res) => setAllCategoriesNews(state => [...state, ...res.payload.articles]))
    //     }
    // }, [])

    const slideWidth = 750;
    const gapWidth = 15;

    const renderPagination = (arr) => {
        return arr.map((item, i) => {
            const number = arr.length > 5 ? i===3 ? '...': (i > 3 && i < arr.length-1) ? '': i+1 : i+1;
            const classNames = i === 0 ? 'app-recommended__num app-recommended__num_active' : 'app-recommended__num';

            const cl = arr.length > 5 ? i===3 ? '': (i > 3 && i < arr.length-1) ? ' invisible': ' visible' : ' visible'
            return (
                <div key={i} className={classNames + cl}>{number}</div>
            )
        })
    }

    const paginationElements = renderPagination(categories);

    const onPrevClick = () => {
        console.log('prev')
    }
    const onNextClick = () => {
        console.log('next')
    }
    return (
        <div className="app-recommended">
            <div className="app-recommended__header">
                <h2 className="app-recommended__title">Рекомендованные вам</h2>
                <div className="app-recommended__pagination">
                    <div className="app-recommended__prev">
                        <Arrow onClick={onPrevClick} color="#e0e0e0" rotate="180deg"/>
                    </div>
                    <div className="app-recommended__nums">
                        {paginationElements}
                    </div>
                    <div className="app-recommended__next">
                        <Arrow onClick={onNextClick} color="#f3692e"/>
                    </div>
                </div>
            </div>
            <div className="app-recommended__carousel">
                <div className="app-recommended__carousel-wrapper">
                    <ul style = {{width: `${categories.length * (slideWidth + gapWidth)}px`}} className="app-recommended__list">
                        {categories.map((category, i) => {
                            return (
                                <RecommendedItem key={nanoid()} category={category} />
                            )
                        })}
                    </ul>
                </div>
            </div>
            
            <button className="btn btn-more app-recommended__more">Еще</button>
        </div>
    )
})

export default Recommended;