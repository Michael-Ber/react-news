import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { newsArray, fetchSearchNews } from '../news/NewsSlice';
import Spinner from '../spinner/Spinner';
import SearchResultItem from '../../components/search/SearchResultItem';
import './searchResult.scss';

const SearchResult = () => {
    const news = useSelector(newsArray);
    const {loadingStatus} = useSelector(state=>state.news)
    const searchRequest = localStorage.getItem('searchRequest');
    const {language} = useSelector(state => state.news);
    const dispatch = useDispatch();

    const renderNews = (arr) => {
        return arr.map((item, i) => {
            return (
                <SearchResultItem key={i} {...item} />
            )
        })
    }
    useEffect(() => {
        dispatch(fetchSearchNews({category: searchRequest, language}))
    }, [searchRequest])

    

    console.log(news);
    const elements = renderNews(news);
    return (
        <div className="app-search-page search-page">
            <h2 className='search-page__title'>Новости</h2>
            {elements}
        </div>  
    )
}

export default SearchResult;