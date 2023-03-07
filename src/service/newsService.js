export const newsService = (country='ru', category='business', pageSize=20) => {
    const apiKey = '7c5bf92a51e04e629562b39598462ba4';
    const apiUrlHeadlines = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const apiUrlEverything = `https://newsapi.org/v2/everything?q=${category}&language=ru&source=${country}&sortBy=popularity&apiKey=${apiKey}`;
    return {
        apiUrlHeadlines,
        apiUrlEverything
    }
}
