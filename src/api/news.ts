import axios, { AxiosRequestConfig } from 'axios';

const request = (config: AxiosRequestConfig) => axios({ ...config });
const getAllNews = async (page: number) => {
    const { data } = await request({
        url: `https://newsapi.org/v2/top-headlines?country=ru&pageSize=40&page=${page}&apiKey=92825af736e84a2fb0728aa9807ea849`,
    });
    console.log(data);
    return data.articles;
};

export default getAllNews;
