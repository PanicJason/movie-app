import axios ,{AxiosResponse} from 'axios';

type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO-KR",
        api_key : "b01194af52d0542aa646fb70bc0f3d24"
    },
});


export const homeApi = {
    nowPlaying: (): Promise<AxiosResponse<NowPlayingData>> => REST_API_ADDR.get("movie/now_playing"),
  
    movieDetail: (id: number): Promise<AxiosResponse<MovieDetailData>> =>
      REST_API_ADDR.get(`movie/${id}`, {
        params: { append_to_response: "videos" },
      }),
  };

export const moviesApi = {
    nowPlaying: () => REST_API_ADDR.get("movie/now_playing"),
    upcoming: () => REST_API_ADDR.get("movie/upcoming"),
    popular: () => REST_API_ADDR.get("movie/popular"),
    topRated: () => REST_API_ADDR.get("movie/top_rated"),
    movieDetail: (id: number) => REST_API_ADDR.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
    similarMovies: (id: number) => REST_API_ADDR.get(`/movie/${id}/similar`),
    recommendations: (id: number) => REST_API_ADDR.get(`/movie/${id}/recommendations`),
    credits: (id: number) => REST_API_ADDR.get(`/movie/${id}/credits`),
    keywords: (id: number) => REST_API_ADDR.get(`/movie/${id}/keywords`),
    reviews: (id: number) => REST_API_ADDR.get(`/movie/${id}/reviews`, { params: { language: "en-US" } }),
    images: (id: number) => REST_API_ADDR.get(`/movie/${id}/images`, { params: { include_image_language: "kr,null" } }),
    search: (term: string) => REST_API_ADDR.get("search/movie", { params: { query: term } }),
    popularInfinite: (page?: number) => REST_API_ADDR.get(`movie/popular`, { params: { page: page } }),
    nowPlayingInfinite: (page?: number) => REST_API_ADDR.get(`movie/now_playing`, { params: { page: page } }),
    upcomingInfinite: (page?: number) => REST_API_ADDR.get(`movie/upcoming`, { params: { page: page } }),
    topRatedInfinite: (page?: number) => REST_API_ADDR.get(`movie/top_rated`, { params: { page: page } }),
  };