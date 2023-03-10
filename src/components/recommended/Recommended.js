import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, memo, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Spinner from '../spinner/Spinner';
import RecommendedItem from './RecommendedItem';
// import {ReactComponent as Prev} from './arrow.svg';
import Arrow from '../arrow/Arrow';
import Pagination from './Pagination';
import { findNodeAfterClick } from '../utils/findNodeAfterClick';
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
    const carouselWidth = categories.length * (slideWidth + gapWidth);
    const translateWidth = slideWidth + gapWidth;
    const [offset, setOffset] = useState(0);
    const [actualSlide, setActualSlide] = useState(1);
    const [pagination, setPagination] = useState([]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    const renderPagination = (arr) => {
        return arr.map((item, i) => {
            const number = arr.length > 5 ? i===3 ? '...': i + 1 : i+1;
            const classNames = i === 0 ? 'app-recommended__num app-recommended__num_active' : 'app-recommended__num';

            const cl = arr.length > 5 ? i===3 ? ' 3-dots': (i > 3 && i < arr.length-1) ? ' invisible': ' visible' : ' visible'
            return (
                <div key={i} className={classNames + cl}>{number}</div>
            )
        })
    }

    const paginationElements = renderPagination(categories);

    const onPrevClick = (e) => {
        setActualSlide(prevSlide => prevSlide === categories.length-2 ? prevSlide - 2: prevSlide-1);
        setOffset(prevOffset => {
            const button = findNodeAfterClick(e.target, 'BUTTON');
            const svg = findNodeAfterClick(e.target, 'svg');
            const nextButtonSvg = nextRef.current.children[0];
            const paginationNums = document.querySelector('.app-recommended__nums');
            // console.log(paginationNums);
            nextButtonSvg.style.stroke = '#f3692e';

            if(prevOffset < 1 * translateWidth) {
                button.disabled = true;
                setActualSlide(1);
                return prevOffset
            }
            if(prevOffset < 2 * translateWidth) {
                svg.style.stroke = '#e0e0e0';
                setActualSlide(1);
            }
            if(prevOffset < 3 * translateWidth) {
                setActualSlide(1);
            }
            return prevOffset - translateWidth
        })

    }
    const onNextClick = (e) => {
        setActualSlide(prevSlide => prevSlide + 1);
        console.log(actualSlide);
        setOffset(prevOffset => {
            const button = findNodeAfterClick(e.target, 'BUTTON');
            const svg = findNodeAfterClick(e.target, 'svg');
            const prevButtonSvg = prevRef.current.children[0];
            prevButtonSvg.style.stroke = '#f3692e';
            if(Math.abs(prevOffset + 2 * translateWidth) >= carouselWidth) {
                button.disabled = true;
                setActualSlide(categories.length-2);
                return prevOffset
            }
            if(Math.abs(prevOffset + 3 * translateWidth) >= carouselWidth) {
                svg.style.stroke = '#e0e0e0';
                setActualSlide(categories.length-2);
            }
            if(Math.abs(prevOffset + 4 * translateWidth) >= carouselWidth) {
                setActualSlide(categories.length-2);
            }

            return prevOffset + translateWidth
        })
    }
    return (
        <div className="app-recommended">
            <div className="app-recommended__header">
                <h2 className="app-recommended__title">Рекомендованные вам</h2>
                <Pagination />
            </div>
            <div className="app-recommended__carousel">
                <div className="app-recommended__carousel-wrapper">
                    <ul 
                        style = {{width: `${carouselWidth}px`, transform: `translateX(${-offset}px)`}} 
                        className="app-recommended__list">
                        {categories.map((category, i) => {
                            return (
                                <RecommendedItem key={nanoid()} i={i} category={category} />
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
})

export default Recommended;