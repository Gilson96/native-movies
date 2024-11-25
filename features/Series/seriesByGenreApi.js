import { apiSlice } from '../apiSlice'

const seriesByGenreApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({

        getActionSeries: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/tv?api_key=010fbfb2693209806775526572b1daaf&first_air_date.gte=2015-01-01&first_air_date.lte=2024-01-01&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&with_genres=10759&with_origin_country=GB&with_origin_country=US' }),
        }),

        getAnimationSeries: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/tv?api_key=010fbfb2693209806775526572b1daaf&first_air_date.gte=2015-01-01&first_air_date.lte=2024-01-01&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&with_genres=16&with_origin_country=GB&with_origin_country=US' }),
        }),

        getDocumentarySeries: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/tv?api_key=010fbfb2693209806775526572b1daaf&first_air_date.gte=2015-01-01&first_air_date.lte=2024-01-01&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&with_genres=99&with_origin_country=GB&with_origin_country=US' }),
        }),

        getComedySeries: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/tv?api_key=010fbfb2693209806775526572b1daaf&first_air_date.gte=2015-01-01&first_air_date.lte=2024-01-01&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&with_genres=35&with_origin_country=GB&with_origin_country=US' }),
        }),

        getCrimeSeries: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/tv?api_key=010fbfb2693209806775526572b1daaf&first_air_date.gte=2015-01-01&first_air_date.lte=2024-01-01&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&with_genres=80&with_origin_country=GB&with_origin_country=US' }),
        }),

        getDramaSeries: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/tv?api_key=010fbfb2693209806775526572b1daaf&first_air_date.gte=2015-01-01&first_air_date.lte=2024-01-01&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&with_genres=18&with_origin_country=GB&with_origin_country=US' }),
        }),


    }),
    overrideExisting: true,
})

export const {
    useGetActionSeriesQuery,
    useGetAnimationSeriesQuery,
    useGetDocumentarySeriesQuery,
    useGetComedySeriesQuery,
    useGetCrimeSeriesQuery,
    useGetDramaSeriesQuery,

} = seriesByGenreApi