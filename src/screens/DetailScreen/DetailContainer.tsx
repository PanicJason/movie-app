import { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import withRouter from "../../utils/withRouter";

interface DetailContainerState{
    result : any | null,
    error : string | null,
    loading : boolean,
    recommendations : any,
    cast : any,
    keyword : any,
    backdrops : any,
    posters : any,
    tvDetail2 : any,
    reviews : any
}

class DetailContainer extends Component<{}, any> {
    constructor(props : any){
        super(props);
        this.state={
            result : [],
            error : null,
            loading : true,
            recommendations : [null],
            cast : [],
            keyword : [],
            reviews : [],
            backdrops : [],
            posters : [],
            tvDetail2 : []
        };
    }



    render() {
        return <DetailPresenter />
    }

}

export default withRouter(DetailContainer);