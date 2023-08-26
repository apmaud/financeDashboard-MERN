import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

// uses reduxjs toolkit query, createApi to make endpoints to call the backend, grab data from the backend
// passing in baseUrl the environmental variable url added earlier, gonna be called everytime api called
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        // using endpoint getKpis, making call using the vitebaseurl + /kpi/kpis/
        // sets up a function that grabs our kpis (key performance indicators)
        // and saving it into the Kpis tag
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })
})

export const { useGetKpisQuery } = api;