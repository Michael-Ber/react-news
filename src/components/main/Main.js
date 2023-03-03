import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../hooks/http.hook";
import store from "../../store/store";
import { fetchingNews, fetchedNews, fetchingNewsError, fetchNews, newsArray } from "./MainSlice";
import Spinner from '../../components/spinner/Spinner';

const Main = () => {
    const {loadingStatus} = useSelector(state => state);
    const news = useSelector(newsArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, [])
    console.log(store.getState());
    console.log(news);
    if(loadingStatus === 'loading') {
        return <Spinner />
    }
    
    return (
        <h1>News test</h1>
    )
}

export default Main;