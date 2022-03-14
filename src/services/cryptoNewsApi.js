// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsApiHeaders = {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '7435a59212msh4a4031f8a7e008cp16b130jsn2a94acffdf57'
// }

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

// const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

// export const cryptoNewsApi = createApi(
//     {
//         reducerPath: 'cryptoNewsApi',
//         baseQuery: fetchBaseQuery({ baseUrl }),
//         endpoints: (builder) => ({
//             getCryptoNews: builder.query({
//                 query: ((newsCategory, count) => createRequest(`/news`)),
//             })
//         }) 
//     }
// )
// // /search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}
// export const { useGetCryptosNewsQuery } = cryptoNewsApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;