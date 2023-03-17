import { configureStore } from "@reduxjs/toolkit";
import news from '../components/news/NewsSlice';
import searchNews from '../components/search/SearchSlice';

const logger = storeAPI => next => action => {
    console.log('dispatching', action);
    let res = next(action);
    console.log('next state', storeAPI.getState());
    return res;
}

const store = configureStore({
    reducer: {news},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;