import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '7435a59212msh4a4031f8a7e008cp16b130jsn2a94acffdf57'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi(
    {
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: ((count) => createRequest(`/coins?limit=${count ?? 10}`))
            }),
            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}`),
              }),
          
              getCryptoHistory: builder.query({
                query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
              }),
          
              getExchanges: builder.query({
                query: () => createRequest('/exchanges'),
              }),
        })
    }
)

// export const { useGetCryptosQuery } = cryptoApi;
// // var options = {
// //     method: 'GET',
// //     url: 'https://coinranking1.p.rapidapi.com/coins',
// //     params: {
// //       referenceCurrencyUuid: 'yhjMzLPhuIDl',
// //       timePeriod: '24h',
// //       tiers: '1',
// //       orderBy: 'marketCap',
// //       orderDirection: 'desc',
// //       limit: '50',
// //       offset: '0'
// //     },
// //     headers: {
// //       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
// //       'x-rapidapi-key': '7435a59212msh4a4031f8a7e008cp16b130jsn2a94acffdf57'
// //     }
// //   };

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Note: Change v1 to v2 on rapid api

// const cryptoApiHeaders = {
//   'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
//   'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
// };
// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: 'cryptoApi',
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: (count) => createRequest(`/coins?limit=${count}`),
//     }),

//     getCryptoDetails: builder.query({
//       query: (coinId) => createRequest(`/coin/${coinId}`),
//     }),

//     // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
//     getCryptoHistory: builder.query({
//       query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
//     }),

//     // Note: To access this endpoint you need premium plan
//     getExchanges: builder.query({
//       query: () => createRequest('/exchanges'),
//     }),
//   }),
// });

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
