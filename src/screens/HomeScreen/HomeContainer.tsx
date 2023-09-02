import { Component } from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "../../api/movie";

// HomeContainer 컴포넌트의 상태 인터페이스 정의
interface HomeContainerState {
    nowPlaying : any[] | null;
    movieDetail : any;
    loading : boolean;
    error : any;
}

class HomeContainer extends Component<{}, HomeContainerState>{
    constructor(props : {}) {
        super(props);
        this.state = {
            nowPlaying : null,
            movieDetail : null, // 영화 상세 정보
            loading : true, // 로딩 상태
            error : null
        };
        
    }

    async componentDidMount() {
        try {
            const {data} = await homeApi.nowPlaying();
            const movieArray = data.results.map((result:any)=> result.id);
            const moviedId = movieArray[Math.floor(Math.random() * movieArray.length)]

            try{

                const { data : movieDetail } = await homeApi.movieDetail(moviedId); 
                if(movieDetail.videos.results.length ===0) {
                    const { data : defaultMovieDetail } = await homeApi.movieDetail(497698);
                    this.setState({movieDetail : defaultMovieDetail}) 
                } else {
                    this.setState({movieDetail : movieDetail});
                }

            }catch(error) {
                this.setState({error: `${error}`});
            }
        }
        catch(error) {
            this.setState({error:"비디오를 재생 할 수 없어요"});
        }
        finally {
            this.setState({loading : false});
        }
    }

    render() {
        // HomePresenter 컴포넌트에 현재 상태를 전달
        return <HomePresenter {...this.state}/>;
    }
}
export default HomeContainer;