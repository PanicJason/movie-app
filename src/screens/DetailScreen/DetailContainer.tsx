import { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import withRouter from "../../utils/withRouter";
import { moviesApi } from "../../api/movie";

interface DetailContainerState{
    result : any | null,
    error : string | null,
    loading : boolean,
    recommendations : any,
    cast : any,
    keywords : any,
    backdrops : any,
    posters : any,
    tvDetail2 : any,
    reviews : any
}

class DetailContainer extends Component<{params : number}, DetailContainerState> {
    constructor(props : any){
        super(props);
        this.state={
            result : [],
            error : null,
            loading : true,
            recommendations : [null],
            cast : [],
            keywords : [],
            reviews : [],
            backdrops : [],
            posters : [],
            tvDetail2 : []
        };
    }

    async componentDidMount() {
        try
        {
            const parsedId = this.props.params;

            const { data : result } = await moviesApi.movieDetail(parsedId);
            const {
                data : { results : recommendations}
            } = await moviesApi.recommendations(parsedId);

            const { data : {cast}} = await moviesApi.credits(parsedId);

            const { data : {keywords}} = await moviesApi.keywords(parsedId);

            const { data : {results : reviews}} = await moviesApi.reviews(parsedId);

            const {
                data : { backdrops },
                data : { posters }
            } = await moviesApi.images(parsedId);

            this.setState({
                result,
                recommendations,
                cast,
                keywords,
                reviews,
                backdrops: backdrops && backdrops,
                posters: posters && posters,
                loading: false,
                error: null,
            })

        }
        catch(err)
        {
            
        }
    }



    render() {
        return <DetailPresenter {...this.state}/>
    }

}

export default withRouter(DetailContainer);