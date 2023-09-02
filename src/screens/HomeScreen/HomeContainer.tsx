import { Component } from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "../../api/movie";

// HomeContainer 컴포넌트의 상태 인터페이스 정의
interface HomeContainerState {
    movieDetail : any;
    loading : boolean;
}

class HomeContainer extends Component<{}, HomeContainerState>{
    constructor(props : {}) {
        super(props);
        this.state = {
            movieDetail : null, // 영화 상세 정보
            loading : true, // 로딩 상태
        };
        
    }

    async componentDidMount() {
        try {
            const {data} = await homeApi.nowPlaying();
            const movieArray = data.results.map((result:any)=> result.id);
            const moviedId = movieArray[Math.floor(Math.random() * movieArray.length)]
        }
        catch(error) {
            
        }
    }

    render() {
        // HomePresenter 컴포넌트에 현재 상태를 전달
        return <HomePresenter {...this.state}/>;
    }
}
export default HomeContainer;