import { FC} from "react";
import { Route, Routes } from "react-router-dom";
import HomeContainer from './screens/HomeScreen';



const Router : FC = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={HomeContainer}/>
            </Routes>
        </div>
    )
}

export default Router;