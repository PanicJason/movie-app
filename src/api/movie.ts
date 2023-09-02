import axios ,{AxiosResponse} from 'axios';


type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO-KR",
    },
});


export const homeApi = {
    nowPlaying : () : Promise<AxiosResponse<NowPlayingData>> => REST_API_ADDR.get("movie/now_playing"),

    movieDetauk :(id:number) : Promise<AxiosResponse<MovieDetailData>> => REST_API_ADDR.get(`movie/${id}`,{
            params:{append_toresonse : "videos"}
        }),


}