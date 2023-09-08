import { Component } from "react";
import MoviePresenter from "./MoviePresenter";

class MovieContainer extends Component<{}, any>{

    render(){
        return <MoviePresenter { ...this.state} />
    }
}

export default MovieContainer;