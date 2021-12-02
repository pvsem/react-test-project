import axios, { AxiosRequestConfig } from 'axios';

const request = (config: AxiosRequestConfig) => axios({ ...config });
const getAllNews = async () => {
    const { data } = await request({
        url: `https://newsapi.org/v2/top-headlines?country=ru&pageSize=40&page=1&apiKey=92825af736e84a2fb0728aa9807ea849`,
    });
    // console.log(data, 'data in news');
    return data.articles;
};

export default getAllNews;
