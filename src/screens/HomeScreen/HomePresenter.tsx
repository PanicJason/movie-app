import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loder';

import styles from './Home.module.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';

// HomePresenter 컴포넌트의 props 인터페이스 정의
interface HomeProps {
    movieDetail : any ; // 영화 상세 정보
    loading : boolean;  // 로딩 상태
    error : any;
}

// HomePresenter 컴포넌트 정의
const HomePresenter: React.FC<HomeProps> = ({
    movieDetail,
    loading,
    error
}) => {
    return loading? (
        <Loader></Loader>
    ) : (
        <div className={styles.container}>
            <HelmetProvider>
                <Helmet>
                    <title>넷플릭스 - 홈</title>
                </Helmet>
            </HelmetProvider>

            <div>컨텐츠 적을 예정</div>
        </div>
    );
}

// props에 대한 타입 및 필수 여부 검증을 위한 PropTypes 설정
HomePresenter.propTypes ={
    movieDetail : PropTypes.object, // movieDetail은 객체여야 함
    loading : PropTypes.bool.isRequired // loading은 필수 prop이며 불리언이어야 함
}

export default HomePresenter;