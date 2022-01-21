import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"
 const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'bb1e6538camsh8f3046be3175d88p184f99jsne6210dc0d18a'
 }

 const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

 const createRequest = (url) => ({url , headers : cryptoNewsHeaders})
 export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi ',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints : (builder) =>({
        getCryptoNews: builder.query({
            query : (newsCategory)=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`),
        })
    })
})
export const{

    useGetCryptoNewsQuery

   }=cryptoNewsApi;