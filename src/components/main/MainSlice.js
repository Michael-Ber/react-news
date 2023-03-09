import { createSlice, createAsyncThunk, createEntityAdapter, createSelector, nanoid } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import { newsService } from "../../service/newsService";

const newsAdapter = createEntityAdapter({
    selectId: () => nanoid()
});

const initialState = newsAdapter.getInitialState({
    category: 'general',
    country: 'us',
    loadingStatus: 'idle'
});

export const fetchNews = createAsyncThunk(
    'fetchNews',
    async ({country, category, pageSize}) => {
        const {request} = useHttp();
        console.log('call');
        const {apiUrlHeadlines} = newsService(country, category, pageSize);
        return await request(apiUrlHeadlines)
    }
);

const mainSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        categoryChanged: (state, action) => {state.category = action.payload},
        countryChanged: (state, action) => {state.country = action.payload}
    },
    extraReducers: builder => {
        builder 
            .addCase(fetchNews.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchNews.fulfilled, (state, action) => {state.loadingStatus = 'idle'; newsAdapter.setAll(state, action.payload.articles)})
            .addCase(fetchNews.rejected, state => {state.loadingStatus = 'error'})
    }
});

const {reducer, actions} = mainSlice;
export default reducer;

const {selectAll} = newsAdapter.getSelectors(state => state.news);

export const newsArray = createSelector(
    selectAll,
    news => news
);

export const {
    categoryChanged,
    countryChanged,
    fetchingNews, 
    fetchedNews,
    fetchingNewsError
} = actions;