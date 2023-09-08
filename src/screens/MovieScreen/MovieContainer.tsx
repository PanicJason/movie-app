import { Component } from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "../../api/movie";


interface MovieContainerState{
    nowPlaying: any[] | null;
    upcoming: any[] | null;
    popular: any[] | null;
    topRated: any[] | null;
    error: string | null;
    loading: boolean;
    popularInfinite: any[] | null;
    nowPlayingInfinite: any[] | null;
    upcomingInfinite: any[] | null;
    topRatedInfinite: any[] | null;
}

class MovieContainer extends Component<{}, MovieContainerState>{

    state: MovieContainerState ={
        nowPlaying : null,
        upcoming : null,
        popular : null,
        topRated : null,
        error : null,
        loading : true,
        nowPlayingInfinite : null,
        upcomingInfinite : null,
        popularInfinite : null,
        topRatedInfinite : null
    };

    async componentDidMount(){
        try{
            const {data: { results: nowPlaying },} = await moviesApi.nowPlaying();
            const {data: { results: upcoming },} = await moviesApi.upcoming();
            const {data: { results: popular },} = await moviesApi.popular();
            const {data: { results: topRated },} = await moviesApi.topRated();
            const {data: { results: popularInfinite },} = await moviesApi.popularInfinite();
            const {data: { results: nowPlayingInfinite },} = await moviesApi.nowPlayingInfinite();
            const {data: { results: upcomingInfinite },} = await moviesApi.upcomingInfinite();
            const {data: { results: topRatedInfinite },} = await moviesApi.topRatedInfinite();
        
            this.setState({
                nowPlaying,
                upcoming,
                popular,
                topRated,
                popularInfinite,
                nowPlayingInfinite,
                upcomingInfinite,
                topRatedInfinite
            });
        }

        catch{
            this.setState({error : "영화정보를 찾을 수 없습니다."});
        }
        finally{
            this.setState({loading : false});
        }
    }

    render(){
        return <MoviePresenter { ...this.state} />
    }
}

export default MovieContainer;