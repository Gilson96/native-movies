import { apiSlice } from '../apiSlice'

const moviesByGenreApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({

        getActionMovies: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/movie?api_key=010fbfb2693209806775526572b1daaf&include_adult=false&page=1&sort_by=primary_release_date.desc&vote_average.gte=6&vote_average.lte=8&with_genres=28&with_origin_country=US&year=2024' }),
        }),

        getAnimationMovies: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/movie?api_key=010fbfb2693209806775526572b1daaf&include_adult=false&page=1&sort_by=primary_release_date.desc&vote_average.gte=6&vote_average.lte=8&with_genres=16&with_origin_country=US&year=2024' }),
        }),

        getComedyMovies: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/movie?api_key=010fbfb2693209806775526572b1daaf&include_adult=false&page=1&sort_by=primary_release_date.desc&vote_average.gte=6&vote_average.lte=8&with_genres=35&with_origin_country=US&year=2024?' }),
        }),

        getCrimeMovies: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/movie?api_key=010fbfb2693209806775526572b1daaf&include_adult=false&page=1&sort_by=primary_release_date.desc&vote_average.gte=6&vote_average.lte=8&with_genres=80&with_origin_country=US&year=2024?' }),
        }),

        getDramaMovies: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/movie?api_key=010fbfb2693209806775526572b1daaf&include_adult=false&page=1&sort_by=primary_release_date.desc&vote_average.gte=6&vote_average.lte=8&with_genres=18&with_origin_country=US&year=2024?' }),
        }),

        getDocumentaryMovies: build.query({
            query: () => ({ url: 'https://api.themoviedb.org/3/discover/movie?api_key=010fbfb2693209806775526572b1daaf&include_adult=false&page=1&sort_by=primary_release_date.desc&vote_average.gte=6&vote_average.lte=8&with_genres=99&with_origin_country=US&year=2024?' }),
        }),

    }),
    overrideExisting: true,
})

export const {
    useGetActionMoviesQuery,
    useGetAnimationMoviesQuery,
    useGetComedyMoviesQuery,
    useGetCrimeMoviesQuery,
    useGetDramaMoviesQuery,
    useGetDocumentaryMoviesQuery
} = moviesByGenreApi