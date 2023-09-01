import { Component } from "react";
import HomePresenter from "./HomePresenter";

interface HomeContainerState {
    movieDetail : any;
    loading : boolean;
}

class HomeContainer extends Component<{}, HomeContainerState>{
    constructor(props : {}) {
        super(props);
        this.state = {
            movieDetail : null,
            loading : true,
        };
        
    }
    render() {
        return <HomePresenter {...this.state}/>;
    }
}
export default HomeContainer;