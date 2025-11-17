import { mainApi } from "@/app/mainApi";
export const  productApi = mainApi.injectEndpoints({
    endpoints: (builder) =>({
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            })
        }),

        getProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            })
        }),

        createProduct: builder.mutation({
            query: (body) => ({
                url: '/products',
                method: 'POST',
                body: body
            })
        }),
        

        updateProduct: builder.mutation({
            query: (body) => ({
                url: `/products/${body.id}`,
                method: 'PUT',
                body: body
            })
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            })
        }),
    })
})


export const {useGetProductsQuery, useGetProductQuery, useCreateProductMutation,
     useUpdateProductMutation, useDeleteProductMutation} = productApi;