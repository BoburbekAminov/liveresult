import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiHost, apiKey, baseUrl } from "../../utils/baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", apiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<any, any>({
      query: () => ({
        url: "/timezone",
      }),
    }),
  }),
});

export const { useGetCountriesQuery } = authApi;
