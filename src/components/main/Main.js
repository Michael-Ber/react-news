import { memo, useEffect } from "react";
import {  fetchNews } from "../main/MainSlice";
import { useSelector, useDispatch } from 'react-redux';
import CurrentNews from "../current-news/CurrentNews";
import Popular from "../popular/Popular";
import './main.scss';


const Main = memo(() => {
    const {country} = useSelector(state => state.news);
    const {category} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews({country, category}))
    }, [])
    return (
        <section className="app-main">
            <div className="app-main__left">
                <CurrentNews />
            </div>
            <div className="app-main__right">
                <Popular />
            </div>
        </section>
    )
})

export default Main;