import { Component } from "react";
import DetailPresenter from "./DetailPresenter";



class DetailContainer extends Component<{}, any> {
    constructor(props : any){
        super(props);
    }


    render() {
        return <DetailPresenter />
    }

}

export default DetailContainer;