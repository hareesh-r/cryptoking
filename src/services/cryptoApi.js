import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1c696eeb37mshe1242fffa274dc7p1cdf6ajsn1a94da8542a6'
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const { useGetCryptosQuery , useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;