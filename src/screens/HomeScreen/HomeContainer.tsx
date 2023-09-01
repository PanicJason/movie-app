import { Component } from "react";
import HomePresenter from "./HomePresenter";

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
    render() {
        // HomePresenter 컴포넌트에 현재 상태를 전달
        return <HomePresenter {...this.state}/>;
    }
}
export default HomeContainer;