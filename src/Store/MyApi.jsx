import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://tech-shop-seven.vercel.app/"}),
  endpoints: (builder) => ({
    getData: builder.query({ query: (name) => name }),
  }),
});
export const { useGetDataQuery } = myApi;
export default myApi;
