import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { newsArray, fetchSearchNews } from '../news/NewsSlice';
import withDate from '../HOC/withDate';
import SearchResultItem from '../../components/search/SearchResultItem';
import './searchResult.scss';
import { nanoid } from '@reduxjs/toolkit';

const SearchResult = () => {
    const news = useSelector(newsArray);
    const searchRequest = localStorage.getItem('searchRequest');
    const {language} = useSelector(state => state.news);
    const dispatch = useDispatch();

    const renderNews = (arr) => {
        return arr.map((item, i) => {
            const SearchResultItemWithDate = withDate(SearchResultItem, {...item});
            return (
                <SearchResultItemWithDate key={nanoid()} />
            )
        })
    }
    useEffect(() => {
        dispatch(fetchSearchNews({category: searchRequest, language}))
    }, [searchRequest])

    
    const elements = renderNews(news);
    return (
        <div className="app-search-page search-page">
            <h2 className='search-page__title'>Новости</h2>
            {elements}
        </div>  
    )
}

export default SearchResult;