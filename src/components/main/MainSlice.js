import { createSlice, createAsyncThunk, createEntityAdapter, createSelector, nanoid } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import { newsService } from "../../service/newsService";

const newsAdapter = createEntityAdapter({
    selectId: () => nanoid()
});

const initialState = newsAdapter.getInitialState({
    activeCategory: '',
    loadingStatus: 'idle'
});

export const fetchNews = createAsyncThunk(
    'fetchNews',
    async () => {
        const {request} = useHttp();
        const {apiUrl} = newsService();
        return await request(apiUrl)
    }
);

const mainSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: builder => {
        builder 
            .addCase(fetchNews.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchNews.fulfilled, (state, action) => {console.log(action.payload.articles);state.loadingStatus = 'idle'; newsAdapter.setAll(state, action.payload.articles)})
            .addCase(fetchNews.rejected, state => {state.loadingStatus = 'error'})
    }
});

const {reducer, actions} = mainSlice;
export default reducer;

const {selectAll} = newsAdapter.getSelectors(state => state.news);

export const newsArray = createSelector(
    selectAll,
    news =>  news
);

export const {
    fetchingNews, 
    fetchedNews,
    fetchingNewsError
} = actions;