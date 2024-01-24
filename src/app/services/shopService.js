import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'



export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url}),
    tagTypes: ["image","location","order"],
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
        query: ({localId, order}) => ({
          url:`orders/${localId}.json`,
          method: "POST",
          body: order
        }),
        invalidatesTags: ["order"]
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
        query: (localId) => `orders/${localId}.json`,
        transformResponse:(response) => {
          if(!response) return []
          const data = Object.keys(response).map(key => ({id:key,...response[key]}))
          return data
        },
        providesTags: ["order"]
      })
    })
})

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, usePostOrdersMutation, usePostProfileImageMutation, useGetProfileImageQuery, usePostUserLocationMutation, useGetUserLocationQuery, useGetOrdersQuery } = shopApi