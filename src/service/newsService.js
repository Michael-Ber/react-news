export const newsService = (country='us') => {
    const apiKey = '7c5bf92a51e04e629562b39598462ba4';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    return {
        apiUrl
    }
}
