import getAllNews from '../api/news';

export const getNews = () => (dispatch: any) => {
    getAllNews().then((newsPage) =>
        dispatch({
            type: 'save-news',
            payload: newsPage,
        })
    );
};
