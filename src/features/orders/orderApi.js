import { mainApi } from "@/app/mainApi";
const orderApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({

    getOrder: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    getOrders: builder.query({
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Get all orders of the user with the given token
 * @param {string} token - The token of the user
 * @returns {Promise} - A promise that resolves to the response of the GET request
 */
/*******  482fe505-34a4-4c3e-8015-5b555b9d9510  *******/
      query: (token) => ({
        url: '/orders',
        method: 'GET',
        headers:{
          Authentication:token
        }
      }),
      providesTags: ['Order']
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: '/orders',
        method: 'POST',
        headers: {
          Authorization: data.token
        },
        body: data.body
      })  
    })
  })
})


export const {useCreateOrderMutation, useGetOrdersQuery, useGetOrderQuery} = orderApi;