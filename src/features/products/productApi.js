import { mainApi } from "@/app/mainApi";
export const  productApi = mainApi.injectEndpoints({
    endpoints: (builder) =>({
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            }),
            providesTags: ['Product']
        }),

        getProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            })
        }),

        createProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                headers: {
                    Authorization:data.token
                },
                body: data.body
            }),
            invalidatesTags: ['Product']
        }),
        

        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/products/${data.id}`,
                method: 'PATCH',
                 headers: {
                    Authorization:data.token
                },
                body:data.body
            })
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        }),
    })
})


export const {useGetProductsQuery, useGetProductQuery, useCreateProductMutation,
     useUpdateProductMutation, useDeleteProductMutation} = productApi;