import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'



export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url}),
    tagTypes: ["image","location","orders"],
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
      }),
      getProduct: builder.query({
        query: (id) => `products/${id}.json`,
      }),
      getCategories: builder.query ({
        query: () => "categories.json",
      }),
      postOrders: builder.mutation ({
        query: (order) => ({
          url:"orders.json",
          method: "POST",
          body: order
        }),
        invalidatesTags: ["orders"]
      }),
      postProfileImage: builder.mutation ({
        query: ({image, localId}) => ({
          url:`profileImages/${localId}.json`,
          method: "PUT",
          body: {
            image: image,
          },
        }),
        invalidatesTags: ["image"]
      }),
      getProfileImage: builder.query({
        query: (localId) => `profileImages/${localId}.json`,
        providesTags: ["image"]
      }),
      postUserLocation: builder.mutation ({
        query: ({location, localId}) => ({
          url:`userLocation/${localId}.json`,
          method: "PUT",
          body: {
            latitude: location.latitude,
            longitude: location.longitude,
            address: location.address,
          }
        }),
        invalidatesTags: ["location"]
      }),
      getUserLocation: builder.query({
        query: (localId) => `userLocation/${localId}.json`,
        providesTags: ["location"]
      }),
      getOrders: builder.query({
        query: () => `orders/.json`,
        providesTags: ["orders"]
      })
    })
})

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, usePostOrdersMutation, usePostProfileImageMutation, useGetProfileImageQuery, usePostUserLocationMutation, useGetUserLocationQuery, useGetOrdersQuery } = shopApi