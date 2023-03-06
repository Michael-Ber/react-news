import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../hooks/http.hook";
import store from "../../store/store";
import { fetchingNews, fetchedNews, fetchingNewsError, fetchNews, newsArray } from "./MainSlice";
import Spinner from '../../components/spinner/Spinner';
import './main.scss';


const Main = () => {
    const {loadingStatus} = useSelector(state => state.news);
    const {country} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const news = useSelector(newsArray);
    const [latestNews] = news;
    const dispatch = useDispatch();
    console.log(latestNews);

    useEffect(() => {
        dispatch(fetchNews({country, category}))
    }, [])


    if(loadingStatus === 'loading') {
        return <Spinner />
    }
    console.log('render');
    return (
        <section className="app-main">
            <div className="app-main__left">
                <div className="app-main__header">
                    <h2 className="app-main__category">{category}</h2>
                    <span className="app-main__time">2 hours ago</span>
                </div>
                <h1 className="app-main__title">{latestNews.title}</h1>
            </div>
            <div className="app-main__right"></div>

        </section>
    )
}

export default Main;