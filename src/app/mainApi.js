import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const base = 'http://192.168.1.72:5000';
export const base = 'https://dev-anuj.onrender.com/';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dev-anuj.onrender.com/api',
        //  baseUrl: 'http:192.168.1.72:5000/api',

    }),
    endpoints: (builder) => ({}),
});

